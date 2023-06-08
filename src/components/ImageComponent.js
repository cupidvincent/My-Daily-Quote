'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import QuoteComponent from './QuoteComponent';

 function ImageComponent(props) {

    useEffect(() => {
        const { quote, wallpaper } = props.data;
        console.log('props image', quote, wallpaper )
        setQuote(quote)
        setImageUrl(
            wallpaper?.urls?.regular ?  wallpaper.urls.regular : setImageUrl
        );

        // setImgSize({
        //     height: wallpaper?.height ?  wallpaper?.height : 500,
        //     width: wallpaper?.width ?  wallpaper?.width : 800
        // })
    }, [props]);

    const [imageUrl, setImageUrl] = useState('https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200');
    const [imgSize, setImgSize] = useState({width: 800, height: 500});
    const [quote, setQuote] = useState({})
    return (
        <div id='wallpaper_continer'>
            <Image
                src={imageUrl}
                width={imgSize.width}
                height={imgSize.height}
                sizes='(max-width: 70px) 70vw'
                quality={100}
                placeholder={'blur'}
                blurDataURL={imageUrl}
                style={'style={{objectFit: "cover"}}'}
                alt="Picture of the author"
                loading='lazy'
            />
            <div className='blurCover'></div>
            <QuoteComponent data={{quote}} />
        </div>
    );
}

export default ImageComponent;