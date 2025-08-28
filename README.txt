
# SM Tech Hub — Static Template

What's included:
- index.html (homepage with category previews)
- mobiles.html, laptops.html, gadgets.html, reviews.html, technews.html, blogs.html (category pages)
- about.html, contact.html, privacy.html, disclaimer.html
- styles.css (mobile-first responsive CSS with dark mode)
- script.js (sample data, search, theme toggle, hamburger)
- README (this file)

How to use:
1. Download the ZIP and extract.
2. Open `index.html` in a browser to preview.
3. Replace sample data in `script.js` or replace pages with server-side templates.
   - For dynamic content, consider generating these pages with a static site generator (Jekyll, Hugo) or use a backend.
4. To host on GitHub Pages:
   - Create a repository and push the files to the `main` branch.
   - In repo Settings -> Pages, select `main` branch / root as source.
   - Your site will be available at `https://<username>.github.io/<repo>/`.
5. To edit articles:
   - Edit the DATA arrays in `script.js` or replace the static HTML files.
   - Each category currently has 10 dummy articles; homepage shows first 5 and has a "View All" to respective category page.

Notes & Next steps:
- Add real images in an `assets/` folder and update `img` URLs.
- Convert to Markdown + static site generator for easier content management.
- Add server-side search or use a JSON feed and fetch() for scalable content.

