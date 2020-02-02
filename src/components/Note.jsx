import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Zoom from "@material-ui/core/Zoom";
import Grow from "@material-ui/core/Grow";

function Note(props) {
  function handleClick() {
    props.onDelete(props.code, props.id);
  }

  return (
    <Grow in={true}>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <Zoom in={true}>
          <button onClick={handleClick}>
            <DeleteIcon />
          </button>
        </Zoom>
      </div>
    </Grow>
  );
}

export default Note;
