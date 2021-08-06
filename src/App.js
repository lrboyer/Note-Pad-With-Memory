import Notepad from "./components/Notepad";
import "./App.css";
import DeleteButton from "./components/DeleteButton";
import SaveButton from "./components/SaveButton";
import React, { useState } from "react";
import Autosave from "./components/Autosave";

function App() {
  const [text, setText] = useState('');
  const [autoSave, setAutoSave] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  //sets text to locally saved data on startup
  React.useEffect(() => {
    const storedText = localStorage.getItem("data");
    const storedSaveSetting = localStorage.getItem('saveSetting');
    setText(storedText);
    setAutoSave(JSON.parse(storedSaveSetting));
  }, []);

  
  React.useEffect(() => {
    if (autoSave) {
      localStorage.setItem("data", text);
      setIsSaved(true);
    }
  });

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    setIsSaved(false);
  };

  const handleSave = () => {
    if (autoSave === false) {
      localStorage.setItem('data', text);
      setIsSaved(true);
    }
  };

  const handleDelete = () => {
    setText('');
    setAutoSave(false);
    localStorage.clear();
  };

  const handleAuto = () => {
    setAutoSave(!autoSave);
    localStorage.setItem('saveSetting', JSON.stringify(autoSave));
  }

  return (
    <div>
      <div>
        <h1 className="title">Notepad</h1>
      </div>
      <div className="notes">
        <Notepad text={text} onChange={handleTextChange} />
      </div>
      <div className='container'>
        <SaveButton handleSave={handleSave}/>
        <DeleteButton handleDelete={handleDelete} />
        <Autosave onChange={handleAuto} checkedBox={isSaved}/>
        <div className='saveText'>
          {isSaved ? 'saved' : 'unsaved'} 
        </div>
        
      </div>
    </div>
  );
}

export default App;
