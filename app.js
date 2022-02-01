const chalk = require('chalk')
const notes = require('./notes')
const yargs = require('yargs')
const { argv } = require('process')

//customize yargs version
yargs.version('17.3.1')

//Create add command
yargs.command({
    command : 'add',
    describe: 'Add a new note',
    builder: {
        title:{
        describe:'Note title',
        demandOption: true,
        type : 'string'

        },
        body:{
            describe:'Note body',
            demandOption: true,
            type : 'string'
    
            } 
    },
    handler(argv){
        /* console.log('title: ' + argv.title),
        console.log('body: ' + argv.body) */
        notes.addNote(argv.title, argv.body)
    }

})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title:{
        describe:'Note title',
        demandOption: true,
        type : 'string'

        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }

})
//Create list command
yargs.command({
    command: 'list',
    describe: 'list your note',
    handler(){
        notes.listNotes()
    }

})
//Create list command
yargs.command({
    command: 'read',
    describe: 'read your note',
    builder: {
        title:{
        describe:'Note title',
        demandOption: true,
        type : 'string'

        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }

})

//console.log(yargs.argv)
yargs.parse()