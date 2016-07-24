#! /bin/bash

# Cleanup folder
rm -rf _assets

# Recreate folder
mkdir -p _assets/website/
mkdir -p _assets/ebook/

# Compile SASS

node-sass --output-style compressed -o _assets/website.css src/website.scss