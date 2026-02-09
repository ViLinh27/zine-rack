import './App.css';
import React from "react";

import 'react-pdf/dist/Page/AnnotationLayer.css';//for rendering
import 'react-pdf/dist/Page/TextLayer.css';//text slection

import ZineReader from './components/ZineReader';
const samplePDF = "/zine-pdfs/Pink-Red-Cute-Cherub-Galentines-Day-Party-Sample-Zine.pdf";
const samplePDF2 = "/zine-pdfs/file-sample_150kB.pdf";
const samplePDF3 = "/zine-pdfs/sample-local-pdf.pdf";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="magazine-rack">
          <ZineReader file={samplePDF}/>
          <ZineReader file={samplePDF2}/>
          <ZineReader file={samplePDF3}/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
