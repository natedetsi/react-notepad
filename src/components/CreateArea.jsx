import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
  //set state of note
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
//show or hide text box when clicked
  const [show, hide] = useState(false);
//handle input changes and save as temp state
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
// submit state change to onAdd function in the app.js file
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
    hide(false);
  }

  function showText() {
    hide(true);
  }

  return (
    <div>
      <Zoom in={true} timeout={1000}>
        <form className="create-note">
          {show ? (
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
          ) : null}
          <textarea
            name="content"
            onClick={showText}
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note..."
            rows={show ? "3" : "1"}
          />
          <Zoom in={show && true}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </Zoom>
    </div>
  );
}

export default CreateArea;
