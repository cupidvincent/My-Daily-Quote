import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

function DownloadButton({data}) {

	useEffect(() => {
        const { quote, wallpaper } = data;
		
        setQuote(quote)
        setImageUrl(
            wallpaper?.urls?.full ?  wallpaper.urls.full : setImageUrl
        );

        setImgSize({
            height: wallpaper?.height ?  wallpaper?.height : 500,
            width: wallpaper?.width ?  wallpaper?.width : 800
        })
    }, [data]);
	
    const [imageUrl, setImageUrl] = useState('https://images.unsplash.com/photo-1684230415144-7c7ef7d4a1d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NDU0MTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYwNTk5Mzh8&ixlib=rb-4.0.3&q=85');
    const [imgSize, setImgSize] = useState({width: 800, height: 500});
    const [quote, setQuote] = useState({})

	const handleDownload = () => {
		const section = document.getElementById('wallpaper_continer');

		html2canvas(section, {
			scale: 3
		}).then(canvas => {
			// canvas.toBlob(blob => {
			// 	saveAs(blob, 'wall.png');
			// });
			const link = document.createElement('a');
			link.href = canvas.toDataURL();
			link.download = 'image.png'; // Specify the desired file name and extension
			link.click();
		});
	};

	const manualImage = () => {
		// const canvas = document.createElement('canvas');
		const canvas = document.getElementById("setCanvas");
		const context = canvas.getContext('2d');
	  
		// Set canvas dimensions
		const width = imgSize.width; // Set the desired width of the image
		const height = imgSize.height; // Set the desired height of the image
		canvas.width = width;
		canvas.height = height;
		console.log({canvas})
		// Draw the background image (replace 'imageUrl' with the URL of your image)
		const backgroundImage = new Image();
		backgroundImage.src = imageUrl; // Replace 'imageUrl' with the URL of your image
		backgroundImage.crossOrigin = 'anonymous';
		backgroundImage.onload = () => {
			context.drawImage(backgroundImage, 0, 0, width, height);

			context.fillStyle ="rgba(255, 255, 255, 0.4)";
			context.fillRect(0, 0, width, height);

			// Draw the text overlay
			const text = quote.quoteText;
			context.font = '20rem Arial';
			context.fillStyle = 'black';
			context.fillText(text, 20, 200, width);

			// Generate download link
			// const link = document.createElement('a');

			link.href = canvas.toDataURL(); // Convert canvas to data URL
			link.download = 'manualImage.png'; // Set the desired filename for the downloaded image
			link.click();

		};
		// context.drawImage(backgroundImage, 0, 0);
	}

	return (
		<button className={'border-sky-400 border-solid border rounded p-2 mb-1 font-mono font-semibold hover:italic'} onClick={manualImage}>Download Wallpaper</button>
	);
}

export default DownloadButton