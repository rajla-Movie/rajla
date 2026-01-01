# 🆓 FREE SMS Notification Setup Guide

This guide shows you how to get **FREE SMS notifications** when someone submits a movie request.

## ✅ 100% Free Solution: EmailJS + Email Forwarding

### How It Works:
1. **EmailJS** sends you an email (FREE - 200 emails/month)
2. **Your email provider** forwards it to SMS (FREE)
3. You get SMS notifications on your phone! 📱

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Sign Up for EmailJS (FREE)
1. Go to https://www.emailjs.com/
2. Click "Sign Up" (FREE account)
3. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** → **Add New Service**
2. Choose your email provider:
   - **Gmail** (Recommended - easiest)
   - **Outlook**
   - **Yahoo**
   - Or any SMTP service
3. Follow the setup instructions
4. **Save your Service ID** (you'll need it)

### Step 3: Create Email Template
1. Go to **Email Templates** → **Create New Template**
2. Use this template:

**Subject:**
```
🎬 New Movie Request: {{movie_name}}
```

**Content:**
```
🎬 New Movie Request!

📽️ Movie Name: {{movie_name}}
🎭 Theater Preference: {{theater_preference}}
⏰ Upload Time: {{upload_days}} day(s)
📅 Requested At: {{timestamp}}

---
Rajla Movies.HD
```

3. **Save your Template ID** (you'll need it)

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### Step 5: Update index.html
Open `index.html` and find the `sendEmailNotification` function (around line 1158).

Replace these values:
```javascript
const EMAILJS_SERVICE_ID = 'service_xxxxxxxx'; // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxxx'; // Your Template ID
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxx'; // Your Public Key
const ADMIN_EMAIL = 'your-email@gmail.com'; // Your email address
```

### Step 6: Forward Email to SMS (FREE)

#### Option A: Gmail (Easiest)
1. Open Gmail → Settings → **Forwarding and POP/IMAP**
2. Click **Add a forwarding address**
3. Enter your SMS email address (see carrier list below)
4. Verify the forwarding address
5. Select **Forward a copy of incoming mail**
6. Save changes

#### Option B: Outlook
1. Go to Settings → **Mail** → **Forwarding**
2. Enable forwarding
3. Enter your SMS email address

#### Option C: Create Email Filter
1. Create a filter for emails with subject "🎬 New Movie Request"
2. Forward those emails to your SMS email address

---

## 📱 SMS Email Addresses by Carrier

Replace `YOURNUMBER` with your 10-digit phone number:

### USA Carriers:
- **AT&T**: `YOURNUMBER@txt.att.net`
- **Verizon**: `YOURNUMBER@vtext.com`
- **T-Mobile**: `YOURNUMBER@tmomail.net`
- **Sprint**: `YOURNUMBER@messaging.sprintpcs.com`
- **Boost Mobile**: `YOURNUMBER@myboostmobile.com`

### India Carriers:
- **Airtel**: `YOURNUMBER@airtelmail.com`
- **Vodafone**: `YOURNUMBER@vodafone-sms.co.in`
- **Idea**: `YOURNUMBER@ideacellular.net`
- **BSNL**: `YOURNUMBER@bsnl.co.in`

### UK Carriers:
- **Vodafone**: `YOURNUMBER@vodafone-sms.co.uk`
- **O2**: `YOURNUMBER@o2.co.uk`
- **EE**: `YOURNUMBER@ee.co.uk`

**Note:** Not all carriers support email-to-SMS. Check with your carrier if unsure.

---

## ✅ Test It

1. Submit a movie request from your website
2. Check your email inbox
3. Check your phone for SMS (if forwarding is set up)

---

## 🎯 Alternative: Just Email (No SMS)

If you don't want SMS, you can just use email notifications:
- EmailJS will send you an email directly
- No forwarding needed
- Still 100% FREE

---

## 🔧 Troubleshooting

### Email not received?
- Check EmailJS dashboard → **Email Logs**
- Check spam/junk folder
- Verify Service ID, Template ID, and Public Key are correct
- Make sure EmailJS service is connected properly

### SMS not received?
- Verify email forwarding is set up correctly
- Check if your carrier supports email-to-SMS
- Try sending a test email to your SMS address manually
- Some carriers have delays (5-10 minutes)

### EmailJS errors?
- Check browser console for error messages
- Verify all credentials are correct
- Make sure EmailJS script is loaded in `index.html`

---

## 💰 Cost Breakdown

- **EmailJS**: FREE (200 emails/month)
- **Email Forwarding**: FREE (included with email provider)
- **SMS via Email**: FREE (included with carrier)

**Total Cost: $0.00** 🎉

---

## 📊 EmailJS Free Tier Limits

- **200 emails/month** (FREE)
- **2 email services** (FREE)
- **5 email templates** (FREE)

For most websites, 200 emails/month is plenty!

---

## 🚀 Upgrade (Optional)

If you need more than 200 emails/month:
- **EmailJS Pro**: $15/month (1,000 emails/month)
- Or use multiple free accounts

---

## 📝 Quick Checklist

- [ ] Signed up for EmailJS (FREE)
- [ ] Created email service
- [ ] Created email template
- [ ] Updated `index.html` with credentials
- [ ] Set up email forwarding to SMS (optional)
- [ ] Tested by submitting a movie request

---

## 🆘 Need Help?

1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Check your email provider's forwarding documentation
3. Test email forwarding manually first
4. Check browser console for errors

---

**That's it! You now have FREE SMS notifications! 🎉**

