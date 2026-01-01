/**
 * Firebase Cloud Functions for SMS Notifications
 * 
 * This file handles sending SMS notifications when movie requests are submitted.
 * 
 * Setup Instructions:
 * 1. Install Firebase CLI: npm install -g firebase-tools
 * 2. Login: firebase login
 * 3. Initialize: firebase init functions
 * 4. Install dependencies: cd functions && npm install twilio
 * 5. Update credentials below
 * 6. Deploy: firebase deploy --only functions
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const twilio = require('twilio');

admin.initializeApp();

// ============================================
// CONFIGURATION - UPDATE THESE VALUES
// ============================================

// Twilio Credentials (Get from https://www.twilio.com/console)
const TWILIO_ACCOUNT_SID = functions.config().twilio?.account_sid || 'YOUR_TWILIO_ACCOUNT_SID';
const TWILIO_AUTH_TOKEN = functions.config().twilio?.auth_token || 'YOUR_TWILIO_AUTH_TOKEN';
const TWILIO_PHONE_NUMBER = functions.config().twilio?.phone_number || 'YOUR_TWILIO_PHONE_NUMBER'; // e.g., +1234567890

// Your phone number (where you want to receive SMS)
const ADMIN_PHONE_NUMBER = functions.config().admin?.phone_number || 'YOUR_PHONE_NUMBER'; // e.g., +91XXXXXXXXXX

// Initialize Twilio client
let twilioClient = null;
if (TWILIO_ACCOUNT_SID !== 'YOUR_TWILIO_ACCOUNT_SID' && TWILIO_AUTH_TOKEN !== 'YOUR_TWILIO_AUTH_TOKEN') {
  twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
}

// ============================================
// CLOUD FUNCTION: Send SMS on Movie Request
// ============================================

/**
 * This function triggers when a new movie request is added to the database.
 * It sends an SMS notification to the admin phone number.
 */
exports.sendSMSOnMovieRequest = functions.database
  .ref('smsNotifications/{notificationId}')
  .onCreate(async (snapshot, context) => {
    const request = snapshot.val();
    
    // Skip if already processed or invalid
    if (!request || request.status === 'sent' || request.status === 'failed') {
      return null;
    }
    
    // Check if Twilio is configured
    if (!twilioClient) {
      console.error('Twilio not configured. Please update credentials in functions/index.js');
      return snapshot.ref.update({ 
        status: 'failed', 
        error: 'Twilio not configured',
        timestamp: admin.database.ServerValue.TIMESTAMP 
      });
    }
    
    // Format the SMS message
    const theaterText = request.answer === 'yes' ? 'Yes (Theater / थिएटर)' : 'No (Online / ऑनलाइन)';
    const date = new Date(request.timestamp);
    const formattedDate = date.toLocaleString('en-IN', { 
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    const message = `🎬 New Movie Request!\n\n📽️ Movie: ${request.movieName}\n🎭 Theater: ${theaterText}\n⏰ Upload: ${request.days} day(s)\n📅 Time: ${formattedDate}\n\nRajla Movies.HD`;
    
    try {
      // Send SMS via Twilio
      const messageResult = await twilioClient.messages.create({
        body: message,
        from: TWILIO_PHONE_NUMBER,
        to: ADMIN_PHONE_NUMBER || request.phoneNumber
      });
      
      console.log('SMS sent successfully:', messageResult.sid);
      
      // Mark as sent in database
      return snapshot.ref.update({ 
        status: 'sent', 
        sentAt: admin.database.ServerValue.TIMESTAMP,
        messageSid: messageResult.sid
      });
      
    } catch (error) {
      console.error('Error sending SMS:', error);
      
      // Mark as failed in database
      return snapshot.ref.update({ 
        status: 'failed', 
        error: error.message,
        failedAt: admin.database.ServerValue.TIMESTAMP
      });
    }
  });

// ============================================
// HELPER FUNCTION: Manual SMS Send
// ============================================

/**
 * HTTP function to manually send SMS (for testing)
 * Usage: POST to https://YOUR_REGION-YOUR_PROJECT.cloudfunctions.net/sendSMS
 */
exports.sendSMS = functions.https.onRequest(async (req, res) => {
  // CORS headers
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }
  
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }
  
  const { movieName, answer, days, phoneNumber } = req.body;
  
  if (!movieName || !twilioClient) {
    res.status(400).json({ error: 'Missing required fields or Twilio not configured' });
    return;
  }
  
  const theaterText = answer === 'yes' ? 'Yes (Theater)' : 'No (Online)';
  const message = `🎬 New Movie Request!\n\nMovie: ${movieName}\nTheater: ${theaterText}\nUpload: ${days} day(s)\n\nRajla Movies.HD`;
  
  try {
    const result = await twilioClient.messages.create({
      body: message,
      from: TWILIO_PHONE_NUMBER,
      to: phoneNumber || ADMIN_PHONE_NUMBER
    });
    
    res.json({ success: true, messageSid: result.sid });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// SETUP INSTRUCTIONS
// ============================================

/*
1. Get Twilio Account:
   - Sign up at https://www.twilio.com/
   - Get Account SID and Auth Token from Console
   - Get a phone number (free trial available)

2. Set Firebase Config:
   firebase functions:config:set twilio.account_sid="YOUR_ACCOUNT_SID"
   firebase functions:config:set twilio.auth_token="YOUR_AUTH_TOKEN"
   firebase functions:config:set twilio.phone_number="YOUR_TWILIO_NUMBER"
   firebase functions:config:set admin.phone_number="YOUR_PHONE_NUMBER"

3. Deploy:
   firebase deploy --only functions

4. Test:
   - Submit a movie request from your website
   - Check your phone for SMS
   - Check Firebase Console → Functions → Logs
*/

