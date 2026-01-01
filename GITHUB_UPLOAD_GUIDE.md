# 📤 How to Upload Project to GitHub

## Method 1: Using GitHub Web Interface (Easiest - No Git Required)

### Step 1: Create GitHub Account
1. Go to https://github.com
2. Click "Sign up" (top right)
3. Enter your email, password, and username
4. Verify your email address

### Step 2: Create New Repository
1. After logging in, click the **"+"** icon (top right)
2. Select **"New repository"**
3. Fill in:
   - **Repository name**: `gsmovies` or `rajla-movies` (your choice)
   - **Description**: "Movie streaming website with admin panel"
   - **Visibility**: Choose **Public** (required for free GitHub Pages)
   - **DO NOT** check "Initialize with README" (you already have files)
4. Click **"Create repository"**

### Step 3: Upload Files
1. On the new repository page, you'll see "uploading an existing file"
2. Click **"uploading an existing file"** link
3. Drag and drop ALL your project files:
   - `index.html`
   - `admin.html`
   - `style.css`
   - `admin.css`
   - `robots.txt`
   - `sitemap.xml`
   - `README.md`
   - `FIXES_APPLIED.md`
   - `GITHUB_UPLOAD_GUIDE.md`
   - `Images/` folder (drag the entire folder)
   - `functions/` folder (drag the entire folder)
   - Any other `.md` files

4. Scroll down and click **"Commit changes"**
5. Wait for upload to complete

### Step 4: Enable GitHub Pages (Make Site Live)
1. Go to your repository page
2. Click **"Settings"** (top menu)
3. Scroll down to **"Pages"** (left sidebar)
4. Under **"Source"**, select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
5. Click **"Save"**
6. Wait 1-2 minutes
7. Your site will be live at: `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`

**Example**: If username is `gouravsharma` and repo is `gsmovies`:
→ `https://gouravsharma.github.io/gsmovies/`

---

## Method 2: Using Git Commands (Advanced)

### Step 1: Install Git
1. Download Git: https://git-scm.com/download/win
2. Install with default settings
3. Open **Git Bash** or **Command Prompt**

### Step 2: Navigate to Your Project
```bash
cd "C:\Users\gs810\OneDrive\Documents\gg\gsmovies"
```

### Step 3: Initialize Git Repository
```bash
git init
```

### Step 4: Add All Files
```bash
git add .
```

### Step 5: Create First Commit
```bash
git commit -m "Initial commit - Movie streaming website"
```

### Step 6: Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `gsmovies`
3. Make it **Public**
4. **DO NOT** initialize with README
5. Click **"Create repository"**

### Step 7: Connect and Push
1. Copy the repository URL from GitHub (looks like: `https://github.com/YOUR_USERNAME/gsmovies.git`)

2. Run these commands (replace YOUR_USERNAME):
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gsmovies.git
git push -u origin main
```

3. Enter your GitHub username and password when prompted

### Step 8: Enable GitHub Pages
- Follow Step 4 from Method 1 above

---

## 🔧 After Uploading

### Update URLs in Your Files

After your site is live, update these URLs in `index.html`:

1. **Line 16-26**: Update Open Graph and Twitter meta tags:
   ```html
   <!-- Replace https://rajla.netlify.app/ with your GitHub Pages URL -->
   <meta property="og:url" content="https://YOUR_USERNAME.github.io/gsmovies/">
   ```

2. **Line 42**: Update canonical URL:
   ```html
   <link rel="canonical" href="https://YOUR_USERNAME.github.io/gsmovies/">
   ```

3. **Line 50, 54, 64**: Update structured data URLs

4. **sitemap.xml**: Update URLs to your GitHub Pages URL

---

## 📝 Quick Checklist

- [ ] Created GitHub account
- [ ] Created new repository
- [ ] Uploaded all files
- [ ] Enabled GitHub Pages
- [ ] Updated URLs in `index.html`
- [ ] Updated URLs in `sitemap.xml`
- [ ] Tested the live site
- [ ] Tested admin panel: `https://YOUR_USERNAME.github.io/gsmovies/admin.html`

---

## 🎯 Your Site URLs

After setup, you'll have:
- **Main Site**: `https://YOUR_USERNAME.github.io/gsmovies/`
- **Admin Panel**: `https://YOUR_USERNAME.github.io/gsmovies/admin.html`
- **Repository**: `https://github.com/YOUR_USERNAME/gsmovies`

---

## 💡 Tips

1. **Repository Name**: Keep it simple, lowercase, no spaces
2. **Public vs Private**: Must be Public for free GitHub Pages
3. **File Size**: GitHub has a 100MB file limit per file
4. **Updates**: To update your site, just upload new files and commit
5. **Custom Domain**: You can add a custom domain in Settings → Pages

---

## 🆘 Troubleshooting

**"Repository not found"**
- Make sure repository is Public
- Check repository name is correct

**"Pages not working"**
- Wait 2-3 minutes after enabling
- Check branch name (should be `main` or `master`)
- Make sure `index.html` is in root folder

**"404 Error"**
- Check file paths (case-sensitive on Linux servers)
- Make sure `index.html` exists in root

---

## ✅ Done!

Your movie streaming website is now live on GitHub Pages! 🎉

Share your site URL with others and start adding movies through the admin panel!

