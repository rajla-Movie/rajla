# 🆓 FREE SMS Notifications - Quick Start

## ✅ What You Get

- **FREE EmailJS account** (200 emails/month)
- **Email notifications** when someone requests a movie
- **Optional SMS** by forwarding email to SMS (FREE)

## 🚀 3-Step Setup

### Step 1: Get EmailJS (2 minutes)
1. Go to https://www.emailjs.com/
2. Sign up (FREE)
3. Create email service (Gmail/Outlook)
4. Create email template

### Step 2: Update index.html (1 minute)
Open `index.html`, find line ~1162, and replace:
```javascript
const EMAILJS_SERVICE_ID = 'service_xxxxx'; // From EmailJS dashboard
const EMAILJS_TEMPLATE_ID = 'template_xxxxx'; // From EmailJS dashboard  
const EMAILJS_PUBLIC_KEY = 'xxxxx'; // From EmailJS dashboard
const ADMIN_EMAIL = 'your-email@gmail.com'; // Your email
```

### Step 3: Forward Email to SMS (Optional - 2 minutes)
1. Gmail: Settings → Forwarding → Add SMS email
2. Use format: `YOURNUMBER@carrier.com`
3. Example: `1234567890@txt.att.net` (AT&T)

## 📱 SMS Email Addresses

**USA:**
- AT&T: `YOURNUMBER@txt.att.net`
- Verizon: `YOURNUMBER@vtext.com`
- T-Mobile: `YOURNUMBER@tmomail.net`

**India:**
- Airtel: `YOURNUMBER@airtelmail.com`
- Vodafone: `YOURNUMBER@vodafone-sms.co.in`

## ✅ Test

1. Submit a movie request
2. Check your email
3. Check your phone (if forwarding set up)

## 📚 Full Guide

See `FREE_SETUP.md` for detailed instructions.

---

**Total Cost: $0.00** 🎉

