#! /bin/bash

# Cleanup folder
rm -rf _assets

# Recreate folder
mkdir -p _assets/website/
mkdir -p _assets/ebook/

# Compile SASS

node-sass --output-style compressed src/scss/website.scss _assets/website/alc-style.css
node-sass --output-style compressed src/scss/ebook.scss _assets/ebook/alc-ebook.css
node-sass --output-style compressed src/scss/epub.scss _assets/ebook/alc-epub.css
node-sass --output-style compressed src/scss/mobi.scss _assets/ebook/alc-mobi.css
node-sass --output-style compressed src/scss/pdf.scss _assets/ebook/alc-pdf.css

# Move Fonts

