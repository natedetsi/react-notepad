const mongoose = require('mongoose');
//notes Schema
const Schema = mongoose.Schema;

const notesSchema = new Schema({
  title: String,
    content: String
});

const Note = mongoose.model('Note', notesSchema);

module.exports =  Note;
