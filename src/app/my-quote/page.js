import React from 'react';
import { createClient } from 'pexels';
import MyQuoteLayout from './layout';
import ImageComponents from '../../components/ImageComponent'

export const metadata = {
  title: 'My Quote',
};

const getQuoteandImage = async (req, res) => {
	const getQuoteText = await fetch(`/my-quote/api`);
	const fin = await getQuoteText.json()
	console.log(req,'getQuoteText',fin)
	return fin;
}

export default async function Quote(props) {
	console.log({props})
	const data =''; //await getData();
	const getQuotes =  getQuoteandImage();
	const imageandQuote = await Promise.all([getQuotes]);
	
	return (
		<MyQuoteLayout>
			<ImageComponents data={imageandQuote}/>
		</MyQuoteLayout>
	)
}

