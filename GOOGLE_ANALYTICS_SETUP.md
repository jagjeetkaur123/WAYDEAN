# Google Analytics Setup Guide

## Step 1: Create Google Analytics Account

1. Go to **google.com/analytics**
2. Click **"Start measuring"**
3. Sign in with your Google account (or create one)
4. Fill in:
   - Account name: `Waydean Nursery`
   - Property name: `Waydean Nursery Website`
   - Website URL: `https://waydeannursery.com.au`
   - Industry category: `Agriculture`
   - Reporting timezone: `Australia/Sydney`
5. Click **"Create"**

---

## Step 2: Get Your Measurement ID

After creating, you'll see:
```
Measurement ID: G-XXXXXXXXXX
```

Copy this ID.

---

## Step 3: Update Your Website

In `Index.html`, find this line (around line 32):
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

**Example:**
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF456"></script>
```

Also update the second occurrence (line 33):
```javascript
gtag('config', 'G-ABC123DEF456');
```

---

## Step 4: Verify Installation

After uploading your website:

1. Go back to google.com/analytics
2. Click on your property
3. Go to **Real-time** → **Overview**
4. Open your website in a new browser tab
5. You should see visitors appearing in real-time ✅

---

## What Data You'll Track

✅ Total visitors  
✅ Page views  
✅ User locations  
✅ Device types (mobile/desktop)  
✅ Time on page  
✅ Bounce rate  
✅ Traffic sources  

---

## Best Practices

- Check analytics **weekly** to see trends
- Aim for 100+ visitors/month as benchmark
- Look for which sections get most engagement
- Monitor bounce rate (should be <50%)

---

## Note about Google Search Console

After your site is live:

1. Go to **google.com/webmasters/tools/home**
2. Add property: `https://waydeannursery.com.au`
3. Verify ownership (via HTML tag)
4. Submit your sitemap: `/sitemap.xml`

This helps Google find and index your pages faster!
