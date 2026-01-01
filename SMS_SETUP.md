# SMS Notification Setup Guide

This guide will help you set up SMS notifications so you receive an SMS whenever someone submits a movie request.

## Option 1: Firebase Cloud Functions with Twilio (Recommended)

### Step 1: Install Firebase CLI
```bash
npm install -g firebase-tools
firebase login
```

### Step 2: Initialize Firebase Functions
```bash
cd your-project-directory
firebase init functions
```
- Select JavaScript
- Install dependencies? Yes

### Step 3: Install Twilio SDK
```bash
cd functions
npm install twilio
```

### Step 4: Create Cloud Function
Create/edit `functions/index.js`:

```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const twilio = require('twilio');

admin.initializeApp();

// Twilio Configuration
const TWILIO_ACCOUNT_SID = 'YOUR_TWILIO_ACCOUNT_SID';
const TWILIO_AUTH_TOKEN = 'YOUR_TWILIO_AUTH_TOKEN';
const TWILIO_PHONE_NUMBER = 'YOUR_TWILIO_PHONE_NUMBER'; // e.g., +1234567890
const ADMIN_PHONE_NUMBER = 'YOUR_PHONE_NUMBER'; // Your phone number with country code

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// Listen for new movie requests
exports.sendSMSOnMovieRequest = functions.database
  .ref('smsNotifications/{notificationId}')
  .onCreate(async (snapshot, context) => {
    const request = snapshot.val();
    
    if (!request || request.status === 'sent') {
      return null;
    }
    
    const theaterText = request.answer === 'yes' ? 'Yes (Theater)' : 'No (Online)';
    const message = `🎬 New Movie Request!\n\nMovie: ${request.movieName}\nTheater: ${theaterText}\nUpload Time: ${request.days} day(s)\n\nTime: ${new Date(request.timestamp).toLocaleString()}`;
    
    try {
      await client.messages.create({
        body: message,
        from: TWILIO_PHONE_NUMBER,
        to: ADMIN_PHONE_NUMBER
      });
      
      // Mark as sent
      return snapshot.ref.update({ status: 'sent', sentAt: admin.database.ServerValue.TIMESTAMP });
    } catch (error) {
      console.error('Error sending SMS:', error);
      return snapshot.ref.update({ status: 'failed', error: error.message });
    }
  });
```

### Step 5: Set Environment Variables
```bash
firebase functions:config:set twilio.account_sid="YOUR_TWILIO_ACCOUNT_SID"
firebase functions:config:set twilio.auth_token="YOUR_TWILIO_AUTH_TOKEN"
firebase functions:config:set twilio.phone_number="YOUR_TWILIO_PHONE_NUMBER"
firebase functions:config:set admin.phone_number="YOUR_PHONE_NUMBER"
```

### Step 6: Deploy Function
```bash
firebase deploy --only functions
```

### Step 7: Get Twilio Credentials
1. Sign up at https://www.twilio.com/
2. Get a phone number from Twilio
3. Copy Account SID and Auth Token from Twilio Console
4. Update the function with your credentials

### Step 8: Update index.html
In `index.html`, update the `adminPhoneNumber` variable in the `sendSMSNotification` function:
```javascript
const adminPhoneNumber = '+91XXXXXXXXXX'; // Your phone number with country code
```

---

## Option 2: EmailJS (Easier Setup - Email that can forward to SMS)

### Step 1: Sign up for EmailJS
1. Go to https://www.emailjs.com/
2. Create a free account
3. Create an email service (Gmail, Outlook, etc.)
4. Create an email template

### Step 2: Get Your Credentials
- Service ID
- Template ID
- Public Key

### Step 3: Update index.html
Find the `sendEmailNotification` function and replace:
```javascript
const EMAILJS_SERVICE_ID = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY = 'your_public_key';
```

### Step 4: EmailJS Template Variables
Use these variables in your EmailJS template:
- `{{movie_name}}` - Movie name
- `{{theater_preference}}` - Theater preference
- `{{upload_days}}` - Upload time
- `{{timestamp}}` - Request timestamp

### Step 5: Forward Email to SMS
Most email providers allow you to forward emails to SMS:
- Gmail: Forward to `yournumber@carrier.com` (e.g., `1234567890@txt.att.net`)
- Outlook: Similar forwarding options

---

## Option 3: Webhook-based SMS Service

### Using services like:
- **Twilio API** (direct API call)
- **MessageBird**
- **Nexmo/Vonage**
- **AWS SNS**

These require a backend server or serverless function to make API calls.

---

## Testing

1. Submit a movie request from the website
2. Check your phone for SMS notification
3. Check Firebase Console → Functions → Logs for any errors
4. Check Firebase Realtime Database → `smsNotifications` to see queued notifications

---

## Troubleshooting

**SMS not received?**
- Check Twilio account balance
- Verify phone number format (include country code, e.g., +91 for India)
- Check Firebase Functions logs
- Verify Twilio credentials are correct

**EmailJS not working?**
- Check EmailJS dashboard for delivery status
- Verify service ID, template ID, and public key
- Check email spam folder

**Firebase Functions not triggering?**
- Check database rules allow writes to `smsNotifications`
- Verify function is deployed: `firebase functions:list`
- Check function logs: `firebase functions:log`

---

## Cost Considerations

- **Twilio**: ~$0.0075 per SMS (varies by country)
- **EmailJS**: Free tier: 200 emails/month
- **Firebase Functions**: Free tier: 2 million invocations/month

---

## Security Notes

- Never commit Twilio credentials to Git
- Use Firebase Functions config or environment variables
- Restrict database write access to `smsNotifications` path
- Consider adding rate limiting to prevent spam

---

**Need Help?**
- Twilio Docs: https://www.twilio.com/docs
- Firebase Functions: https://firebase.google.com/docs/functions
- EmailJS Docs: https://www.emailjs.com/docs/

