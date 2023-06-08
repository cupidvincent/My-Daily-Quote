import React from 'react'
import variables from '../styles/variables.module.scss';
import '../styles/layout.scss'

export default function MyQuoteLayout({ children }) {
  return (
    <div id='quote-layout'>
        {children}
    </div>
  )
}
