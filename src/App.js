import React from "react";
import Header from "./NoteComponents/Header.jsx";
import Notes from "./NoteComponents/Notes.jsx";
import "./App.css"
const App = () => {
  return (
    <div className="App">
      <Header />
      <Notes /> 
    </div>
  );
};

export default App;
