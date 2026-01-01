# Quick SMS Setup Guide

## 🎯 What's New?

Your movie request section now has:
- ✅ **SMS Notifications** - Get instant SMS when someone requests a movie
- ✅ **Enhanced UI** - Better design with feature highlights
- ✅ **Multiple Notification Methods** - Firebase Cloud Functions + EmailJS fallback

---

## 🚀 Quick Setup (Choose One Method)

### Method 1: Firebase Cloud Functions + Twilio (Recommended)

**Step 1:** Get Twilio Account
- Sign up at https://www.twilio.com/ (Free trial available)
- Get Account SID, Auth Token, and a phone number

**Step 2:** Install Firebase CLI
```bash
npm install -g firebase-tools
firebase login
```

**Step 3:** Setup Functions
```bash
cd your-project-folder
firebase init functions
# Select JavaScript, install dependencies
cd functions
npm install twilio
```

**Step 4:** Update `functions/index.js`
- Replace `YOUR_TWILIO_ACCOUNT_SID` with your Twilio Account SID
- Replace `YOUR_TWILIO_AUTH_TOKEN` with your Auth Token
- Replace `YOUR_TWILIO_PHONE_NUMBER` with your Twilio phone number
- Replace `YOUR_PHONE_NUMBER` with your phone number (where you want SMS)

**Step 5:** Set Config & Deploy
```bash
firebase functions:config:set twilio.account_sid="YOUR_ACCOUNT_SID"
firebase functions:config:set twilio.auth_token="YOUR_AUTH_TOKEN"
firebase functions:config:set twilio.phone_number="YOUR_TWILIO_NUMBER"
firebase functions:config:set admin.phone_number="YOUR_PHONE_NUMBER"
firebase deploy --only functions
```

**Step 6:** Update `index.html`
- Find line with `const adminPhoneNumber = '+91XXXXXXXXXX';`
- Replace with your phone number (include country code, e.g., +91 for India)

---

### Method 2: EmailJS (Easier - Email that can forward to SMS)

**Step 1:** Sign up at https://www.emailjs.com/

**Step 2:** Create Email Service
- Connect your email (Gmail, Outlook, etc.)
- Create an email template with variables:
  - `{{movie_name}}`
  - `{{theater_preference}}`
  - `{{upload_days}}`
  - `{{timestamp}}`

**Step 3:** Update `index.html`
Find the `sendEmailNotification` function and replace:
```javascript
const EMAILJS_SERVICE_ID = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY = 'your_public_key';
const ADMIN_EMAIL = 'your-email@example.com';
```

**Step 4:** Forward Email to SMS
- Most email providers allow forwarding to SMS
- Gmail: Forward to `yournumber@carrier.com`
- Example: `1234567890@txt.att.net` (AT&T)

---

## 📱 Phone Number Format

Always include country code:
- India: `+91XXXXXXXXXX`
- USA: `+1XXXXXXXXXX`
- UK: `+44XXXXXXXXXX`

---

## ✅ Test It

1. Submit a movie request from your website
2. Check your phone for SMS/Email
3. Check Firebase Console → Functions → Logs for errors

---

## 🔧 Troubleshooting

**No SMS received?**
- Check Twilio account balance
- Verify phone number format (include country code)
- Check Firebase Functions logs
- Verify credentials are correct

**EmailJS not working?**
- Check EmailJS dashboard
- Verify all IDs and keys are correct
- Check spam folder

---

## 📚 Full Documentation

See `SMS_SETUP.md` for detailed instructions.

---

## 💰 Cost

- **Twilio**: ~$0.0075 per SMS (varies by country)
- **EmailJS**: Free tier: 200 emails/month
- **Firebase Functions**: Free tier: 2M invocations/month

---

**Need Help?** Check the full setup guide in `SMS_SETUP.md`

