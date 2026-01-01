# 📧 How to Fill EmailJS Template - Step by Step

Based on your EmailJS template editor, here's exactly what to fill:

## ✅ Step-by-Step Instructions

### 1. **Subject Field** (Already filled correctly!)
```
New Movie Request: {{movie_name}}
```
✅ This is already correct! Keep it as is.

---

### 2. **Content Section** (Click "Edit Content" button)

Click the **"Edit Content"** button (with pencil icon) and paste this:

```
🎬 New Movie Request!

📽️ Movie Name: {{movie_name}}
🎭 Theater Preference: {{theater_preference}}
⏰ Upload Time: {{upload_days}} day(s)
📅 Requested At: {{timestamp}}

---
Rajla Movies.HD
```

**Or use this HTML version** (if you want better formatting):

```html
<div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f5f5f5;">
  <div style="background-color: #e70634; color: white; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
    <h2 style="margin: 0;">🎬 New Movie Request!</h2>
  </div>
  
  <div style="background-color: white; padding: 20px; border-radius: 5px;">
    <p><strong>📽️ Movie Name:</strong> {{movie_name}}</p>
    <p><strong>🎭 Theater Preference:</strong> {{theater_preference}}</p>
    <p><strong>⏰ Upload Time:</strong> {{upload_days}} day(s)</p>
    <p><strong>📅 Requested At:</strong> {{timestamp}}</p>
  </div>
  
  <div style="margin-top: 20px; text-align: center; color: #666;">
    <p>---</p>
    <p><strong>Rajla Movies.HD</strong></p>
  </div>
</div>
```

---

### 3. **Right Sidebar Settings**

#### **To Email:**
```
gourav10062007@gmail.com
```
✅ This is already correct! This is where you'll receive notifications.

#### **From Name:**
Change from `{{name}}` to:
```
Rajla Movies.HD
```
Or keep it as:
```
Movie Request System
```

#### **From Email:**
✅ Keep "Use Default Email Address" checked (this is fine)

#### **Reply To:**
Change from `{{email}}` to:
```
gourav10062007@gmail.com
```
Or leave it empty if you don't want replies.

#### **Bcc & Cc:**
Leave these empty (unless you want to copy someone)

---

## 📋 Available Variables

Your code sends these variables that you can use in the template:

- `{{movie_name}}` - Name of the requested movie
- `{{theater_preference}}` - "Yes / हाँ (Theater)" or "No / नहीं (Online)"
- `{{upload_days}}` - Number of days (1 or 5)
- `{{timestamp}}` - Date and time of request
- `{{to_email}}` - Your email address
- `{{message}}` - Full formatted message (optional)

---

## ✅ Quick Checklist

- [ ] Subject: `New Movie Request: {{movie_name}}` ✅
- [ ] Content: Added the template content above
- [ ] To Email: `gourav10062007@gmail.com` ✅
- [ ] From Name: Changed to "Rajla Movies.HD" or similar
- [ ] From Email: Using default ✅
- [ ] Reply To: Your email or empty
- [ ] Click "Save" button

---

## 🎨 Template Preview

After filling, your email will look like:

```
🎬 New Movie Request!

📽️ Movie Name: Avatar 2
🎭 Theater Preference: Yes / हाँ (Theater)
⏰ Upload Time: 5 day(s)
📅 Requested At: Jan 15, 2024, 2:30 PM

---
Rajla Movies.HD
```

---

## 💡 Tips

1. **Test the template** - EmailJS has a "Test" button to send yourself a test email
2. **Use variables** - Always use `{{variable_name}}` format (double curly braces)
3. **Save frequently** - Click "Save" after making changes
4. **Mobile view** - Check the "Mobile" tab to see how it looks on phones

---

## 🚀 After Filling

1. Click **"Save"** button
2. Copy your **Template ID** (looks like `template_xxxxx`)
3. Update `index.html` with this Template ID
4. Test by submitting a movie request!

---

**Need help?** Check `FREE_SETUP.md` for more details!

