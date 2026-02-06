import './App.css';
import React from "react";

import 'react-pdf/dist/Page/AnnotationLayer.css';//for rendering
import 'react-pdf/dist/Page/TextLayer.css';//text slection

import ZineReader from './components/ZineReader';
const samplePDF = "/zine-pdfs/Pink-Red-Cute-Cherub-Galentines-Day-Party-Sample-Zine.pdf";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="magazine-rack">
          <ZineReader file={samplePDF}/>
          <div>test</div>
          <div>test</div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
