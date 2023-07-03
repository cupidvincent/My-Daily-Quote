import { NextResponse } from 'next/server';
 
export async function GET() {

    const rawQuote =  await fetch('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json', {
        'mode': 'no-cors',
        cache: 'no-store'
    });

    const quote = await rawQuote.json();

    return NextResponse.json({ quote });
}

