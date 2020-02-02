import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from 'axios';

function App() {


  const [notes, setNotes] = useState([]);
// add the note to the mongo database, axios.post this took ages to figure out but the reason the data would not show was because i needed to pass
// the newNote from the createArea to this function and then call the key pairs (title: newNote.title, content: newNote.content) I believe this is because it
// had to be deconstructed frist
  function addNote(newNote) {
    axios.post('http://localhost:5000/notes/add', {title: newNote.title, content: newNote.content})// passing json
    console.log(newNote)
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });


  }



useEffect(() => {
  axios.get('http://localhost:5000/notes')
  .then(res => {
    console.log(res.data)
    setNotes(res.data)
  })
  .catch(err => {
    console.log(err)
  })
},[]);

  function deleteNote(code, id) {
    console.log(code, id)
    axios.delete(`http://localhost:5000/notes/${code}`)
      setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return  index !== id
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            code={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
      </div>

  );
}

export default App;
