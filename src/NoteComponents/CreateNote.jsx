import React from "react";
import { LinearProgress } from "@mui/material";

const CreateNote = () => {
  return (
    <div className="note">
      <textarea name="" id=""></textarea>
      <div className="note_footer">
        <span className="label">label</span>
        <button className="note_save">save</button>
      </div>
      <LinearProgress
        className="char_progress"
        variant="determinate"
        value={30}
      />
    </div>
  );
};

export default CreateNote;
