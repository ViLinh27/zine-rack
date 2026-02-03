import './App.css';
import React, { useState,useRef } from "react";
import ReactDOM from "react-dom";
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf"; //can hold page count too
import {GlobalWorkerOptions} from 'pdfjs-dist';

const samplePDF = "../public/zine-pdfs/Pink-Red-Cute-Cherub-Galentines-Day-Party-Sample-Zine.pdf";
//pdfjs use here
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


const width = 300;
const height = 424;

const Page = React.forwardRef(({ pageNumber }, ref) => {
  return (
    <div ref={ref}>
      <ReactPdfPage pageNumber={pageNumber} width={width} />
    </div>
  );
});

function App() {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const bookRef=useRef();

  return (
    <div className="App">
      <header className="App-header">
        <div className="magazine-rack">
          <div className='Book-zine'>
            {/* <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
              <HTMLFlipBook
                width={width}
                height={height}
                size="fixed"
                showCover={true}
                maxShadowOpacity={0.5}
                mobileScrollSupport={true}
              >
                {Array.apply(null, Array(numPages))
                  .map((x, i) => i + 1)
                  .map((page) => (
                    <Page pageNumber={page} />
                  ))}
              </HTMLFlipBook>
            </Document> */}
          </div>
          <div>test</div>
          <div>test</div>
        </div>
      </header>
    </div>
  );
}

export default App;
