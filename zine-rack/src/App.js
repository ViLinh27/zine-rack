import './App.css';
import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf"; //can hold page count too

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="magazine-rack">
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </div>
      </header>
    </div>
  );
}

export default App;
