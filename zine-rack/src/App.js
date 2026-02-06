import './App.css';
import React from "react";

import 'react-pdf/dist/Page/AnnotationLayer.css';//for rendering
import 'react-pdf/dist/Page/TextLayer.css';//text slection

import ZineReader from './components/ZineReader';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <ZineReader/>
      </header>
    </div>
  );
}

export default App;
