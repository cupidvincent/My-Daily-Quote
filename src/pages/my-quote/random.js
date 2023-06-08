import React from 'react';
import  './random.scss';
import MyQuoteLayout from '../layout';
import ImageComponents from '../../components/ImageComponent'
import QuoteComponent from '../../components/QuoteComponent';
import DownloadButton from '../../components/DownloadButton';

export const metadata = {
  title: 'My Quote',
};

export default  function Quote({quote, wallpaper}) {
	// console.log({props})
	
	return (
		<MyQuoteLayout>
			<div id='QuoteAndWallpaper'>
				<ImageComponents data={{wallpaper, quote}}/>
			</div>
			<DownloadButton />
		</MyQuoteLayout>
	)
}

export async function getServerSideProps(context) {
	const { req } = context;
	const host = req.headers;

	console.log(host['x-forwarded-proto'],'getQuoteText')
	const getQuoteText = await fetch(`${host['x-forwarded-proto']}://${host['host']}/my-quote/api`);
	const quote = await getQuoteText.json()
	return {
		props: {
			...quote
		}
	}
}
