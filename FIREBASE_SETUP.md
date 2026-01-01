# Firebase Setup Guide for Cross-Device Movie Sync

This guide will help you set up Firebase so movies added on one device appear on all devices.

## Step 1: Create Firebase Project

1. Go to https://console.firebase.google.com/
2. Click "Add project" or "Create a project"
3. Enter project name: `rajla-movies` (or any name)
4. Disable Google Analytics (optional, can enable later)
5. Click "Create project"
6. Wait for project creation, then click "Continue"

## Step 2: Enable Realtime Database

1. In Firebase Console, click "Realtime Database" in left menu
2. Click "Create Database"
3. Choose location (select closest to your users)
4. Start in **Test Mode** (for now - we'll secure it later)
5. Click "Enable"

## Step 3: Get Firebase Configuration

1. In Firebase Console, click the gear icon ⚙️ next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps" section
4. Click the `</>` (Web) icon
5. Register app name: `Rajla Movies`
6. Copy the `firebaseConfig` object

## Step 4: Update Your Files

### Update `index.html`:

Find this section (around line 60):
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

Replace with your actual Firebase config from Step 3.

### Update `admin.html`:

Find the same `firebaseConfig` section and replace it with your config.

## Step 5: Secure Your Database (Important!)

1. Go to Realtime Database → Rules
2. Replace the rules with:

```json
{
  "rules": {
    "movies": {
      ".read": true,
      ".write": true
    },
    "movieRequests": {
      ".read": true,
      ".write": true
    }
  }
}
```

3. Click "Publish"

**Note:** For production, you should add authentication. For now, this allows read/write access.

## Step 6: Test

1. Deploy your updated files to Netlify
2. Open admin panel on Device 1
3. Add a movie
4. Open the main page on Device 2
5. The movie should appear automatically!

## How It Works

- **Firebase Realtime Database**: Stores movies in the cloud
- **localStorage**: Keeps a local copy for offline access
- **Real-time Sync**: When admin adds/deletes a movie, all devices update automatically
- **Fallback**: If Firebase is unavailable, uses localStorage

## Troubleshooting

**Movies not syncing?**
- Check browser console for errors
- Verify Firebase config is correct
- Make sure database rules allow read/write
- Check internet connection

**Firebase quota exceeded?**
- Free tier: 1GB storage, 10GB/month transfer
- For more, upgrade to Blaze plan (pay as you go)

## Alternative: Without Firebase

If you don't want to use Firebase, the site will still work with localStorage only, but movies won't sync across devices.

---

**Need Help?** Check Firebase documentation: https://firebase.google.com/docs/database/web/start

