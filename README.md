# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Beautiful gradient effects, smooth animations, and clean design
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Interactive Elements**: Animated skill bars, hover effects, and form validation
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Sections Included**:
  - Hero/Home section
  - About Me section
  - Skills section with animated progress bars
  - Projects showcase
  - Contact form with validation

## Getting Started

1. Open `index.html` in your web browser
2. No build process or dependencies required - it's pure HTML, CSS, and JavaScript!

## Customization

### Personal Information
- Update your name in the hero section (line 30 in `index.html`)
- Modify the about section text (lines 60-70)
- Update contact information (lines 200-220)
- Add your social media links (lines 225-230)

### Skills
- Edit the skills section (lines 85-130) to match your expertise
- Adjust skill percentages in the `data-progress` attribute

### Projects
- Replace project cards (lines 135-195) with your actual projects
- Update project links, descriptions, and tags

### Colors
- Modify CSS variables in `styles.css` (lines 5-13) to change the color scheme:
  ```css
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Notes

- The contact form currently shows an alert on submission. To make it functional, you'll need to integrate it with a backend service or email service like Formspree, EmailJS, etc.
- Replace placeholder images with your actual photos
- Update all placeholder text with your personal information

## License

Feel free to use this portfolio template for your personal website!
