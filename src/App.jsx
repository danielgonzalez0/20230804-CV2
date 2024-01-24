import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Education from './components/main/Education';
import Certification from './components/main/Certification';
import Experience from './components/main/Experience';
import Footer from './components/footer/Footer';

const App = () => {
  const pdfRef = useRef(null);
  const [isCapturing, setIsCapturing] = useState(false);

  const handlePrint = async () => {
    if (!isCapturing && pdfRef.current) {
      setIsCapturing(true);

      try {
        const canvas = await html2canvas(pdfRef.current, { scale: 4 });
        const capturedImage = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'px', 'a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 0;

        pdf.addImage(
          capturedImage,
          'PNG',
          imgX,
          imgY,
          imgWidth * ratio,
          imgHeight * ratio
        );

        pdf.save('cv-daniel-gonzalez.pdf');
        setIsCapturing(false);
      } catch (error) {
        console.error('Error capturing or generating PDF:', error);
        setIsCapturing(false);
      }
      //fin coller
    }
  };

  return (
    <>
      <button id="btn-print" onClick={() => handlePrint()}>
        Print
      </button>
      <div className="app" ref={pdfRef}>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Header />
          <div className="main-container">
            <Certification />
            <Education />
            <Experience />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
