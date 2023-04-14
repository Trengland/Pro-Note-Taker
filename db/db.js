const util = require('util')
const fs = require('fs')
const uuid = require('uuid/v1')

const readfile = util.promisify(fs.readFile)
const writefile = util.promisify(fs.writeFile)

class DB {
    read() {
        return readfile('db/db.json', 'utf8')
    }
    write(note) {
        return writefile('db/db.json', JSON.stringify(note))
    }
    getallnotes() {
        return this.read().then((notes) => {
            let dbNotes;
            try {
                dbNotes = [].concat(JSON.parse(notes))
            } catch(err) {dbNotes = []}
            return dbNotes
        })
    }
    addnote(note) {
        const {title, text} = note
        if (!title || !text) {
            throw new Error('Title & Text cannot be blank')
        }
        const newNote = {
            title,text,id: uuid()
        }
        return this.getallnotes()
        .then((notes) => [...notes, newNote])
        .then((updatednotes) => this.write(updatednotes))
        .then(() => newNote)
    }

    //filter method
        removeNote(id) {
            return this.getallnotes()
            .then((notes) => notes.filter((note) => note.id !== id))
            .then((filterednotes) => this.write(filterednotes))
        }
}

module.exports = new DB()

