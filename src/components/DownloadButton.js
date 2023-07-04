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

	const wrapText = (ctx, text, author, x, y, maxWidth, lineHeight) => {
		// First, start by splitting all of our text into words, but splitting it into an array split by spaces
		let words = text.split(' ');
		let line = ''; // This will store the text of the current line
		let testLine = ''; // This will store the text when we add a word, to test if it's too long
		let lineArray = []; // This is an array of lines, which the function will return

		// Lets iterate over each word
		for(var n = 0; n < words.length; n++) {
			// Create a test line, and measure it..
			testLine += `${words[n]} `;
			let metrics = ctx.measureText(testLine);
			let testWidth = metrics.width;
			// If the width of this test line is more than the max width
				if (testWidth > maxWidth && n > 0) {
					// Then the line is finished, push the current line into "lineArray"
					lineArray.push([line, x, y]);
					// Increase the line height, so a new line is started
					// y += lineHeight;
					y += lineHeight
					// Update line and test line to use this word as the first word on the next line
					line = `${words[n]} `;
					testLine = `${words[n]} `;
				}
				else {
					// If the test line is still less than the max width, then add the word to the current line
					line += `${words[n]} `;
				}
				// If we never reach the full max width, then there is only one line.. so push it into the lineArray so we return something
				if(n === words.length - 1) {
					lineArray.push([line, x, y]);
				}
				console.log({y, lineHeight})
		}
		// Return the line array
		lineArray.push([author, x, y+ (lineHeight * 3) ]);
		console.log({lineArray})
		return lineArray;
	}

	const manualImage = () => {
		const canvas = document.createElement('canvas');
		// const canvas = document.getElementById("setCanvas");
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
			const text = `"${quote.quoteText}"`;
			const author = `-${quote.quoteAuthor}`;

			context.font = 'bold 20rem Comic Sans MS';
			context.fillStyle = 'black';
			context.textAlign = 'left';
			context.textBaseline = 'middle';

			const lineHeight = 350; // Line height for each line
			let wrappedText = wrapText(context, text, author, canvas.width - (canvas.width * .9), canvas.height / 2,  canvas.width * .8, lineHeight);
			console.log(canvas.width , canvas.width * .9 ,canvas.width - (canvas.width * .9))

			let lineTextCount = lineHeight * (wrappedText.length + 2);
			let deducted = canvas.height - lineTextCount;
			let newY = deducted  / 2;

			wrappedText.forEach(function(item, index) {
				console.log({canvasHeight: canvas.height, lineTextCount, deducted, newY})
				if(index === wrappedText.length -1 ) {
					context.font = 'oblique 20rem Comic Sans MS';
					newY = newY + ( lineHeight * 2)
				}
				context.fillText(item[0], item[1], newY); 
				newY += lineHeight;
			})
			// context.fillText(`"${text}" \n -${author}`, canvas.width / 2, canvas.height / 2, canvas.width * .8);

			// Generate download link
			const link = document.createElement('a');

			link.href = canvas.toDataURL(); // Convert canvas to data URL
			link.download = `${new Date().getTime()}.png`; // Set the desired filename for the downloaded image
			link.click();

		};
		// context.drawImage(backgroundImage, 0, 0);
	}

	return (
		<button className={'border-sky-400 border-solid border rounded p-2 mb-1 font-mono font-semibold hover:italic'} onClick={manualImage}>Download Wallpaper</button>
	);
}

export default DownloadButton