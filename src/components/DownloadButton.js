import React from 'react'
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

function DownloadButton() {
    const handleDownload = () => {
        const section = document.getElementById('wallpaper_continer');
    
        html2canvas(section).then(canvas => {
          canvas.toBlob(blob => {
            saveAs(blob, 'wall.png');
          });
        });
      };
    
      return (
        <button onClick={handleDownload}>Download Section</button>
      );
}

export default DownloadButton