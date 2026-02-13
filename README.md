# FusionHack - AI Traffic Detection Hackathon Website

A modern, premium website for the FusionHack hackathon organized by IEEE Students Branch at Government Engineering College, Bharuch.

## 🚀 Quick Start

### View Locally

1. **Install a simple HTTP server** (if you don't have one):
   ```bash
   npm install -g serve
   ```

2. **Serve the website**:
   ```bash
   serve .
   ```

3. **Open in browser**: http://localhost:3000

### Alternative: Python Server

```bash
python3 -m http.server 8000
```

Then open: http://localhost:8000

## 📝 Before Deployment

### Required Updates

1. **Google Form Link** (Line 363 in `index.html`):
   ```html
   <a href="YOUR_GOOGLE_FORM_LINK_HERE" target="_blank">
   ```
   Replace with your actual Google Form URL.

2. **Contact Information** (Footer section):
   - Email address
   - Phone number
   - Social media links (Instagram, Twitter, LinkedIn)

## 🌐 Deployment Options

### Option 1: Netlify (Recommended)

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

3. Follow the prompts to link your Netlify account.

**Or use Netlify Drop**: Just drag and drop this folder to https://app.netlify.com/drop

### Option 2: Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

### Option 3: GitHub Pages

1. Create a new repository on GitHub
2. Initialize and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```
3. Enable GitHub Pages in repository settings (Settings → Pages → Source: main branch)

### Option 4: Any Static Host

Upload the entire folder to any static hosting service:
- Firebase Hosting
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps

## 📁 Project Structure

```
FusionHack/
├── index.html          # Main HTML file
├── style.css           # Comprehensive styling
├── script.js           # Interactive features
└── README.md           # This file
```

## ✨ Features

- ✅ Modern dark theme with vibrant gradients
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Live countdown timer to event date
- ✅ Smooth scroll animations
- ✅ 3D hover effects on prize cards
- ✅ Glassmorphism design
- ✅ Mobile-friendly hamburger menu
- ✅ Google Form integration ready
- ✅ SEO optimized

## 🎨 Customization

### Change Colors

Edit CSS variables in `style.css` (starting at line 8):

```css
:root {
    --color-primary: #8B5CF6;     /* Purple */
    --color-secondary: #06B6D4;   /* Cyan */
    --color-accent: #3B82F6;      /* Blue */
    /* ... other colors */
}
```

### Change Event Dates

1. **Countdown Timer**: Edit `script.js` line 55:
   ```javascript
   const targetDate = new Date('2026-02-21T00:00:00').getTime();
   ```

2. **Timeline Dates**: Update in HTML timeline section.

### Add Logos

Add IEEE and GEC Bharuch logos by:
1. Place logo images in the project folder
2. Update `index.html` hero section to include `<img>` tags

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Flexbox, Grid, animations
- **JavaScript**: ES6+, Intersection Observer API
- **Fonts**: Google Fonts (Inter, Space Grotesk)

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Support

For any issues or questions about the website:
- Email: ieee@gecbharuch.edu.in
- Update contact details in footer after deployment

## 📄 License

Created for FusionHack 2026 - IEEE Students Branch, GEC Bharuch.

---

**Built with ❤️ for FusionHack 2026**
# FusionHack
