import React, { useState } from 'react';
import './App.css';
import Message from './Message';

function App() {
  const [textFromInput, setTextFromInput] = useState('');
  
  return (
    <div className="App">
      < input value = {
        textFromInput
      } onChange={(e) => setTextFromInput(e.target.value)} />
      
      < Message inputText= { textFromInput } />
    </div>
  );
};

export default App;
