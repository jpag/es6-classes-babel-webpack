printf "\n\n----- running deployment -----"

# empty the folder
rm -rf ./dist/*

mkdir ./dist/css
mkdir ./dist/js

# run js minification / webpack
npm run build:js
# run stylus compressed.

npm run dist:stylus

# copy index file over. strip it over dev things like live reload.

# this should just be everything that isn't js/css:
cp -r ./public/index.html ./dist/index.html
cp -r ./public/favicon.ico ./dist/favicon.ico

# templates.