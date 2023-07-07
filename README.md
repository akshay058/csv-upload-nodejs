## About The Project

This is a simple CSV upload tool that can be used to upload CSV files to a server and easily accessable to show data associated with each uploaded file.

## Tech Stack USed

HTML, CSS, BOOTSTRAP, EXPRESS, NODE JS..

## Features :

- upload CSV file using multer.
- show CSV file data online.
- Delete single CSV file.
- Pagination
- Filter data as per need.
- searching data by keyword.

## Structure of Code

    Upload-CSV
        |-----assets
        |       |--- css
        |       |     |-- file.css
        |       |     |-- home.css
        |       |--- JS
        |             |-- file.js
        |------ config
        |         └--- mongoose.js
        |------ controller
        |         └--- fileController.js
        |------ models
        |         └--- fileModel.js
        |------ routes
        |         └--- index.js
        |------ uploads
        |         |--- files
        |------ views
        |         |--- file.ejs
        |         |--- home.ejs
        |------ .gitignore
        |------ index.js
        |------ package.json
        |------ package-lock.json
        └------ README.md

## Live Link:

https://csv-upload-nodejs.onrender.com

## Screenshots

![App Screenshot](/Screenshot1.jpg?raw=true "Optional Title")

![App Screenshot](/Screenshot2.jpg?raw=true "Optional Title")

![App Screenshot](/Screenshot3.jpg?raw=true "Optional Title")
