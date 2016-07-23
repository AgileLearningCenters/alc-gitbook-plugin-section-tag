#! /bin/bash

# Cleanup folder
rm -rf _assets

# Recreate folder
mkdir -p _assets/website/
mkdir -p _assets/ebook/

# Compile SASS

#sass --output-style compressed -o src/website.scss _assets/website.css