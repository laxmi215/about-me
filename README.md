# 🌟 All About Me - Personal Website

A beautiful, responsive personal website showcasing who you are, where you're from, your hobbies, and interests. Perfect for school projects and personal portfolios!

## 🚀 Live Demo

Once deployed to GitHub Pages, your website will be available at:
`https://yourusername.github.io/about-me`

## 📁 Project Structure

```
About me/
├── index.html          # Main homepage
├── hobbies.html        # Hobbies and activities page
├── interests.html      # Interests and passions page
├── styles.css          # Complete stylesheet
├── script.js           # Interactive JavaScript
├── images/             # Image assets folder
│   ├── README.md       # Image guidelines
│   ├── profile.jpg     # Your profile photo
│   ├── about-me.jpg    # Additional personal photo
│   ├── hometown1-4.jpg # Hometown photos
│   ├── photography.jpg # Hobby images
│   ├── reading.jpg
│   ├── cooking.jpg
│   ├── music.jpg
│   ├── sports.jpg
│   ├── art.jpg
│   ├── movies.jpg      # Interest images
│   ├── books-interest.jpg
│   ├── technology.jpg
│   ├── science.jpg
│   └── arts.jpg
└── README.md           # This file
```

## ✨ Features

### 🏠 Homepage (index.html)

- **Hero Section**: Eye-catching introduction with your photo
- **About Section**: Personal information and quick facts
- **Birthplace Section**: Interactive map of your hometown with photo gallery
- **Responsive Navigation**: Works on all devices

### 🎨 Hobbies Page (hobbies.html)

- **Hobby Showcase**: Beautiful cards for each hobby
- **Timeline**: Visual journey of how you discovered your hobbies
- **Goals Section**: Your hobby-related aspirations

### 💡 Interests Page (interests.html)

- **Categorized Interests**: Movies, books, technology, science, arts
- **Interactive Elements**: Progress bars, stats, and favorites
- **Future Goals**: Academic, career, and personal growth objectives

### 🎯 Technical Features

- **Fully Responsive**: Looks great on phones, tablets, and desktops
- **Modern Design**: Gradient backgrounds, smooth animations, card layouts
- **Interactive Navigation**: Mobile hamburger menu
- **Smooth Scrolling**: Enhanced user experience
- **Image Fallbacks**: Graceful handling of missing images
- **Print Friendly**: Optimized for printing
- **Accessibility**: Focus states and screen reader friendly

## 🛠️ Customization Guide

### 1. Personal Information

Replace all placeholder text with your actual information:

**In index.html:**

- `[Your Name]` - Your actual name
- `[Your Grade/Year]` - Your current grade or year in school
- `[Your School]` - Your school name
- `[Your Age]` - Your age
- `[Your City, State/Country]` - Your birthplace
- `your.email@example.com` - Your email address

**In all files:**

- Update navigation links if you change filenames
- Replace bracket placeholders `[like this]` with your information

### 2. Google Maps Integration

**Important**: Update the map embed in `index.html`:

1. Go to [Google Maps](https://maps.google.com)
2. Search for your hometown
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the existing iframe in the "Birthplace Section"

### 3. Images

Add your images to the `images/` folder with these exact names:

**Required Images:**

- `profile.jpg` - Your main profile photo
- `about-me.jpg` - Additional photo of yourself
- `hometown1.jpg` to `hometown4.jpg` - Photos of your hometown
- `photography.jpg` - Represents your photography hobby
- `reading.jpg` - Books or reading scene
- `cooking.jpg` - Cooking or baking
- `music.jpg` - Musical instruments
- `sports.jpg` - Sports activities
- `art.jpg` - Art supplies or artwork
- `movies.jpg` - Movies/TV related
- `books-interest.jpg` - Different books image
- `technology.jpg` - Tech/coding related
- `science.jpg` - Science equipment or nature
- `arts.jpg` - Music and arts

**Image Guidelines:**

- Size: 800x600 pixels or larger recommended
- Format: JPG, PNG, or WebP
- Quality: High resolution for best results
- File size: Under 2MB each

### 4. Colors and Styling

To change the color scheme, edit `styles.css`:

**Current color palette:**

- Primary: `#667eea` (Blue)
- Secondary: `#764ba2` (Purple)
- Accent: `#f5576c` (Pink)
- Background: `#f8f9fa` (Light gray)

**To change colors:**

1. Find and replace color values in `styles.css`
2. Update gradient backgrounds for a new look
3. Modify hover effects and button colors

### 5. Content Sections

**Add or modify sections by:**

1. Adding new hobby cards in `hobbies.html`
2. Creating additional interest categories in `interests.html`
3. Updating the timeline with your actual hobby journey
4. Modifying goals to match your aspirations

## 🌐 GitHub Pages Deployment

### Step 1: Create GitHub Account

1. Go to [github.com](https://github.com) and sign up
2. Verify your email address

### Step 2: Create Repository

1. Click "+" in the top right → "New repository"
2. Name it `about-me` (or any name you prefer)
3. Make sure it's **Public**
4. Check "Add a README file"
5. Click "Create repository"

### Step 3: Upload Files

**Option A: Web Interface (Easiest)**

1. In your new repository, click "uploading an existing file"
2. Drag and drop all your website files
3. Write commit message: "Initial website upload"
4. Click "Commit changes"

**Option B: Git Commands (Advanced)**

```bash
git clone https://github.com/yourusername/about-me.git
cd about-me
# Copy your files into this folder
git add .
git commit -m "Initial website upload"
git push origin main
```

### Step 4: Enable GitHub Pages

1. In your repository, go to "Settings"
2. Scroll down to "Pages" in the left sidebar
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch
5. Click "Save"

### Step 5: Access Your Website

- Your website will be available at: `https://yourusername.github.io/about-me`
- It may take 5-10 minutes to become available
- You'll get an email when it's ready

### Step 6: Custom Domain (Optional)

If you have your own domain:

1. In Pages settings, add your domain under "Custom domain"
2. Create a CNAME file in your repository with your domain name

## 🔧 Troubleshooting

### Images Not Loading

- Check that image files are in the `images/` folder
- Verify filenames match exactly (case-sensitive)
- Ensure images are under 2MB each
- Use JPG, PNG, or WebP formats only

### Website Not Loading

- Wait 10 minutes after enabling GitHub Pages
- Check that `index.html` is in the root folder
- Verify repository is public
- Check GitHub Pages settings are correct

### Mobile Menu Not Working

- Ensure `script.js` file is included
- Check browser console for JavaScript errors
- Verify all file links are correct

### Map Not Showing Your Location

- Replace the Google Maps embed code with your location
- Ensure the iframe has proper src attribute
- Check that maps are not blocked by browser

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🎓 Educational Value

This project teaches:

- **HTML5**: Semantic structure, forms, media elements
- **CSS3**: Flexbox, Grid, animations, responsive design
- **JavaScript**: DOM manipulation, event handling, mobile interactions
- **Git/GitHub**: Version control and web hosting
- **Web Design**: User experience, accessibility, visual hierarchy

## 🤝 Getting Help

### School Resources

- Ask your teacher for guidance on content
- Use school computers if you don't have access at home
- Work with classmates for peer review

### Technical Support

- Check browser developer tools (F12) for errors
- Validate HTML at [validator.w3.org](https://validator.w3.org)
- Test CSS at [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator)

### Online Resources

- [MDN Web Docs](https://developer.mozilla.org) - HTML, CSS, JavaScript reference
- [GitHub Pages Help](https://docs.github.com/en/pages) - Official documentation
- [W3Schools](https://w3schools.com) - Web development tutorials

## 📋 Project Checklist

Before submission, ensure you have:

- [ ] Replaced all placeholder text with your information
- [ ] Added all required images to the images folder
- [ ] Updated the Google Maps embed with your location
- [ ] Tested the website on different screen sizes
- [ ] Checked that all links work correctly
- [ ] Deployed successfully to GitHub Pages
- [ ] Verified the live website loads properly
- [ ] Added your actual contact information
- [ ] Personalized the hobbies and interests sections
- [ ] Proofread all content for spelling and grammar

## 🌟 Enhancement Ideas

Once your basic website is complete, consider adding:

### Advanced Features

- [ ] Contact form functionality
- [ ] Photo galleries with lightbox effects
- [ ] Blog section for regular updates
- [ ] Dark/light mode toggle
- [ ] Multiple language support

### Content Additions

- [ ] Achievement and awards section
- [ ] School project showcase
- [ ] Volunteer work and community service
- [ ] Travel experiences and photos
- [ ] Career exploration and job shadowing

### Technical Improvements

- [ ] Search engine optimization (SEO)
- [ ] Performance optimization
- [ ] Progressive Web App features
- [ ] Advanced animations and interactions
- [ ] Integration with social media

## 📄 License

This project is created for educational purposes. Feel free to use, modify, and share with your classmates!

## 🎉 Congratulations!

You've created a professional personal website! This project demonstrates your creativity, technical skills, and personal brand. Great job! 🚀

---

**Made with ❤️ for your school project**

_Last updated: October 2025_
#   a b o u t - m e  
 