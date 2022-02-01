## Overview 
It use Node Module System, covers command line arguments, using NPM packages.
## Technologies Used This app is built on: 
* [NodeJS](https://nodejs.org) 
* [npm](https://www.npmjs.com/)  
## Getting Started
You will need: * Node v16.13.2 * Npm v8.1.2
### To run the app locally Run the below commands: 
`npm i` - Install the packages in `package.json`\
`npm i chalk@2.4.1` - Install npm library(chalk) - version 2.4.1\
`npm i yargs@17.3.1` - Install npm library(yargs) - version 17.3.1\
`node app.js add --title="title" --body="body"` - Add your preferred title and body to the notes.json file\
`node app.js remove --title="title"` - Remove your preferred title and the related body from the notes.json file\
`node app.js list` - List all notes.json titles\
`node app.js read --title="title"` - find your preferred title and the related body if exists
