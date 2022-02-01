const { default: chalk } = require('chalk')
const fs = require ('fs')

//add note in notes.json
const addNote = (title, body) =>{
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)
    if (!duplicateNote)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New note added'))
    }
    else{
        console.log(chalk.red('Note title taken'))
    }
}

//remove note of notes.json
const removeNotes = (title) =>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)

    } else{
        console.log(chalk.black.bgRed('No note found!'))
    }
}

//List notes
const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.cyan.inverse('Your notes'))
    notes.forEach(note => {
        console.log(chalk.green(note.title))
    });

}

//Read notes
const readNotes = (title) =>{
    const notes = loadNotes()
    const noteFound = notes.find((note)=> note.title === title)
    if(noteFound){
        console.log(chalk.green.inverse(noteFound.title))
        console.log(noteFound.body) 

    }
    else{
        console.log(chalk.red.inverse('No note found!'))
    }

}

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch(e){
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}