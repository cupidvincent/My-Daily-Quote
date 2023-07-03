import React from 'react'
import variables from '../styles/variables.module.scss';
import '../styles/layout.scss'
import './globals.css'
import Navbar from '../components/Navbar';

export default function MyQuoteLayout({ children }) {
	return (
		// <>
		// 	<Navbar/>
			<div id='quote-layout' className='flex flex-row'>
				{children}
			</div>
		// </>
	)
}
