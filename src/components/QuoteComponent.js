import React, { useState, useEffect } from 'react'

export default function QuoteComponent(props) {

    useEffect(() => {
        const { quote } = props.data;
        console.log('props quooooteee', quote )
        setQuoteText({
            author: quote?.quoteAuthor ? quote.quoteAuthor : '',
            quote: quote?.quoteText ? quote.quoteText : ''
        })
    }, [props]);

    const [quoteText, setQuoteText ] = useState({
        author: '',
        quote: ''
    })
    
    return (
        <div id='quote_continer'>
            <div id='text-container'>
                <h2>"{quoteText.quote}"</h2>
                <br/>
                <h5>-{quoteText.author}</h5> 
            </div>
        </div>
    )
}
