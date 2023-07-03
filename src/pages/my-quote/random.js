import React, { useEffect, useState } from 'react';
import  './random.scss';
import MyQuoteLayout from '../layout';
import ImageComponents from '../../components/ImageComponent'
import QuoteComponent from '../../components/QuoteComponent';
import DownloadButton from '../../components/DownloadButton';
import OperationButton from '../../components/OperationButton';

export const metadata = {
  title: 'My Quote',
};

export default  function Quote({quote, wallpaper}) {
	// console.log({props})

	const [quoteContainer, setQuote] = useState({});
	const [wallpaperContainer, setWallpaper] = useState({});

	useEffect(() => {
		setQuote(quote)
		setWallpaper(wallpaper)
	},[quote, wallpaper])

	const getNewQuote = async () => {
		const getHost = window.location.origin;
		const getQuoteText = await fetch(`${getHost}/my-quote/api/quote`);
		const quoteResult = await getQuoteText.json()
		console.log({getHost,quoteResult: quoteResult.quote})
		setQuote(quoteResult?.quote ? quoteResult?.quote : {})
	}

	const getNewWallpaper = async () => {
		const getHost = window.location.origin;
		const getWallpaper = await fetch(`${getHost}/my-quote/api/wallpaper`);
		const wallpapaerResult = await getWallpaper.json()
		console.log({getHost,wallpapaerResult: wallpapaerResult.wallpaper})
		setWallpaper(wallpapaerResult?.wallpaper ? wallpapaerResult?.wallpaper : {})
	}

	const getNewQuoteAndImg = async () => {
		const getHost = window.location.origin;
		const getNew = await fetch(`${getHost}/my-quote/api/getall`);

		const newReqDatas = await getNew.json()
		console.log({getHost,wallpapaerResult: newReqDatas.wallpaper})
		setWallpaper(newReqDatas?.wallpaper ? newReqDatas?.wallpaper : {})
		setQuote(newReqDatas?.quote ? newReqDatas?.quote : {})
	}
	
	return (
		<MyQuoteLayout>
			<div id='QuoteAndWallpaper' className='shadow-xl shadow-gray-600'>
				<ImageComponents data={{quote: quoteContainer, wallpaper: wallpaperContainer}}/>
				{/* <canvas id='setCanvas'  width="800" height="500"/> */}
			</div>
			<div className={'flex flex-col justify-center px-2'}>
				<OperationButton label={'New Quote'} action={getNewQuote}/>
				<OperationButton label={'New Wallpaper'} action={getNewWallpaper}/>
				<OperationButton label={'Get New'} action={getNewQuoteAndImg}/>
				<DownloadButton  data={{quote: quoteContainer, wallpaper: wallpaperContainer}} />

			</div>
		</MyQuoteLayout>
	)
}

export async function getServerSideProps(context) {
	const { req } = context;
	const host = req.headers;

	console.log(host['x-forwarded-proto'],'getQuoteText')
	const getQuoteText = await fetch(`${host['x-forwarded-proto']}://${host['host']}/my-quote/api/getall`);
	const quote = await getQuoteText.json()
	return {
		props: {
			...quote
		}
	}
}
