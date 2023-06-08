import { NextResponse } from 'next/server';
 
export async function GET() {

    const rawQuote =  await fetch('http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json', {
        'mode': 'no-cors',
        cache: 'no-store'
    });

    const rawWallpapaer = await fetch('https://api.unsplash.com/photos/random/?orientation=landscape&client_id=RH-ELiY31MyDM3pHdE4l8kDKaD7E-CnUKJgDS4wWjKI', {
        cache: 'no-store'
    });

    const quote = await rawQuote.json();
    const wallpaper = await rawWallpapaer.json()

    // const quote = {
    //     "quoteText": "A time splashed with interest, wounded with tragedy, crevassed with joy — that’s the time that seems long in the memory. And this is right when you think about it. Eventlessness has no posts to drape duration on.",
    //     "quoteAuthor": "John Steinbeck",
    //     "senderName": "",
    //     "senderLink": "",
    //     "quoteLink": "http://forismatic.com/en/38945829c0/"
    // };
    // const wallpaper = {
    //     "id": "q5s7tZFaj1g",
    //     "slug": "q5s7tZFaj1g",
    //     "created_at": "2023-05-16T09:53:24Z",
    //     "updated_at": "2023-06-06T09:36:09Z",
    //     "promoted_at": "2023-05-17T09:48:21Z",
    //     "width": 6774,
    //     "height": 4492,
    //     "color": "#f3f3f3",
    //     "blur_hash": "LuJ*ehjEWUae_NRjaykC-;RjRkj[",
    //     "description": null,
    //     "alt_description": "a pile of junk with a bunch of flowers on top of it",
    //     "urls": {
    //         "raw": "https://images.unsplash.com/photo-1684230415144-7c7ef7d4a1d2?ixid=M3w0NDU0MTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYwNTk5Mzh8&ixlib=rb-4.0.3",
    //         "full": "https://images.unsplash.com/photo-1684230415144-7c7ef7d4a1d2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NDU0MTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYwNTk5Mzh8&ixlib=rb-4.0.3&q=85",
    //         "regular": "https://images.unsplash.com/photo-1684230415144-7c7ef7d4a1d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDU0MTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYwNTk5Mzh8&ixlib=rb-4.0.3&q=80&w=1080",
    //         "small": "https://images.unsplash.com/photo-1684230415144-7c7ef7d4a1d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDU0MTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYwNTk5Mzh8&ixlib=rb-4.0.3&q=80&w=400",
    //         "thumb": "https://images.unsplash.com/photo-1684230415144-7c7ef7d4a1d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NDU0MTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYwNTk5Mzh8&ixlib=rb-4.0.3&q=80&w=200",
    //         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1684230415144-7c7ef7d4a1d2"
    //     },
    //     "links": {
    //         "self": "https://api.unsplash.com/photos/q5s7tZFaj1g",
    //         "html": "https://unsplash.com/photos/q5s7tZFaj1g",
    //         "download": "https://unsplash.com/photos/q5s7tZFaj1g/download?ixid=M3w0NDU0MTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYwNTk5Mzh8",
    //         "download_location": "https://api.unsplash.com/photos/q5s7tZFaj1g/download?ixid=M3w0NDU0MTh8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYwNTk5Mzh8"
    //     },
    //     "likes": 20,
    //     "liked_by_user": false,
    //     "current_user_collections": [],
    //     "sponsorship": null,
    //     "topic_submissions": {},
    //     "user": {
    //         "id": "H_dmeCdODQQ",
    //         "updated_at": "2023-06-05T17:42:36Z",
    //         "username": "nateh0lland",
    //         "name": "Nate Holland",
    //         "first_name": "Nate",
    //         "last_name": "Holland",
    //         "twitter_username": "nateh0lland",
    //         "portfolio_url": "https://www.etsy.com/uk/shop/PhotosByNateH",
    //         "bio": "Brand & UI Designer @ Series Eight",
    //         "location": "England",
    //         "links": {
    //             "self": "https://api.unsplash.com/users/nateh0lland",
    //             "html": "https://unsplash.com/@nateh0lland",
    //             "photos": "https://api.unsplash.com/users/nateh0lland/photos",
    //             "likes": "https://api.unsplash.com/users/nateh0lland/likes",
    //             "portfolio": "https://api.unsplash.com/users/nateh0lland/portfolio",
    //             "following": "https://api.unsplash.com/users/nateh0lland/following",
    //             "followers": "https://api.unsplash.com/users/nateh0lland/followers"
    //         },
    //         "profile_image": {
    //             "small": "https://images.unsplash.com/profile-1683577169057-603c45b346b6image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //             "medium": "https://images.unsplash.com/profile-1683577169057-603c45b346b6image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //             "large": "https://images.unsplash.com/profile-1683577169057-603c45b346b6image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //         },
    //         "instagram_username": "nateh0lland",
    //         "total_collections": 0,
    //         "total_likes": 90,
    //         "total_photos": 132,
    //         "accepted_tos": true,
    //         "for_hire": true,
    //         "social": {
    //             "instagram_username": "nateh0lland",
    //             "portfolio_url": "https://www.etsy.com/uk/shop/PhotosByNateH",
    //             "twitter_username": "nateh0lland",
    //             "paypal_email": null
    //         }
    //     },
    //     "exif": {
    //         "make": "NORITSU KOKI",
    //         "model": "EZ Controller",
    //         "name": "NORITSU KOKI, EZ Controller",
    //         "exposure_time": null,
    //         "aperture": null,
    //         "focal_length": null,
    //         "iso": null
    //     },
    //     "location": {
    //         "name": "B29 OVEREXPOSED Crash Site, Charlesworth, Glossop, UK",
    //         "city": "Charlesworth",
    //         "country": "United Kingdom",
    //         "position": {
    //             "latitude": 53.450557,
    //             "longitude": -1.864866
    //         }
    //     },
    //     "meta": {
    //         "index": true
    //     },
    //     "public_domain": false,
    //     "tags": [
    //         {
    //             "type": "search",
    //             "title": "uk"
    //         },
    //         {
    //             "type": "search",
    //             "title": "glossop"
    //         },
    //         {
    //             "type": "search",
    //             "title": "b29 overexposed crash site"
    //         },
    //         {
    //             "type": "search",
    //             "title": "charlesworth"
    //         },
    //         {
    //             "type": "search",
    //             "title": "film photography"
    //         },
    //         {
    //             "type": "search",
    //             "title": "film"
    //         },
    //         {
    //             "type": "search",
    //             "title": "plane"
    //         },
    //         {
    //             "type": "search",
    //             "title": "plane crash"
    //         },
    //         {
    //             "type": "search",
    //             "title": "england"
    //         },
    //         {
    //             "type": "landing_page",
    //             "title": "mountains",
    //             "source": {
    //                 "ancestry": {
    //                     "type": {
    //                         "slug": "images",
    //                         "pretty_slug": "Images"
    //                     },
    //                     "category": {
    //                         "slug": "nature",
    //                         "pretty_slug": "Nature"
    //                     },
    //                     "subcategory": {
    //                         "slug": "mountain",
    //                         "pretty_slug": "Mountain"
    //                     }
    //                 },
    //                 "title": "Mountain images & pictures",
    //                 "subtitle": "Download free mountain images",
    //                 "description": "Choose from a curated selection of mountain photos. Always free on Unsplash.",
    //                 "meta_title": "Mountain Pictures | Download Free Images & Stock Photos on Unsplash",
    //                 "meta_description": "Choose from hundreds of free mountain pictures. Download HD mountain photos for free on Unsplash.",
    //                 "cover_photo": {
    //                     "id": "YFFGkE3y4F8",
    //                     "slug": "YFFGkE3y4F8",
    //                     "created_at": "2016-11-30T09:21:54Z",
    //                     "updated_at": "2023-06-05T09:01:04Z",
    //                     "promoted_at": "2016-11-30T09:21:54Z",
    //                     "width": 2500,
    //                     "height": 1670,
    //                     "color": "#d9d9d9",
    //                     "blur_hash": "LVFGF9xa4mR%-URiR*ay-;%MjbWB",
    //                     "description": "We did a short road trip to the Dolomites (5hrs driving). We stopped the car almost every 5 meters because of the beautiful landscape. \r\nIt reminded me to take the time and appreciate what is around you.",
    //                     "alt_description": "body of water and snow-covered mountains during daytime",
    //                     "urls": {
    //                         "raw": "https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-4.0.3",
    //                         "full": "https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                         "regular": "https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                         "small": "https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                         "thumb": "https://images.unsplash.com/photo-1480497490787-505ec076689f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1480497490787-505ec076689f"
    //                     },
    //                     "links": {
    //                         "self": "https://api.unsplash.com/photos/YFFGkE3y4F8",
    //                         "html": "https://unsplash.com/photos/YFFGkE3y4F8",
    //                         "download": "https://unsplash.com/photos/YFFGkE3y4F8/download",
    //                         "download_location": "https://api.unsplash.com/photos/YFFGkE3y4F8/download"
    //                     },
    //                     "likes": 2987,
    //                     "liked_by_user": false,
    //                     "current_user_collections": [],
    //                     "sponsorship": null,
    //                     "topic_submissions": {},
    //                     "premium": false,
    //                     "plus": false,
    //                     "user": {
    //                         "id": "wk-b071tZ0o",
    //                         "updated_at": "2023-06-04T04:11:17Z",
    //                         "username": "timstief",
    //                         "name": "Tim Stief",
    //                         "first_name": "Tim",
    //                         "last_name": "Stief",
    //                         "twitter_username": null,
    //                         "portfolio_url": "http://timstief.ch/",
    //                         "bio": null,
    //                         "location": "Zurich",
    //                         "links": {
    //                             "self": "https://api.unsplash.com/users/timstief",
    //                             "html": "https://unsplash.com/@timstief",
    //                             "photos": "https://api.unsplash.com/users/timstief/photos",
    //                             "likes": "https://api.unsplash.com/users/timstief/likes",
    //                             "portfolio": "https://api.unsplash.com/users/timstief/portfolio",
    //                             "following": "https://api.unsplash.com/users/timstief/following",
    //                             "followers": "https://api.unsplash.com/users/timstief/followers"
    //                         },
    //                         "profile_image": {
    //                             "small": "https://images.unsplash.com/profile-1455099105651-9aa69818b001?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //                             "medium": "https://images.unsplash.com/profile-1455099105651-9aa69818b001?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //                             "large": "https://images.unsplash.com/profile-1455099105651-9aa69818b001?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //                         },
    //                         "instagram_username": "timstief",
    //                         "total_collections": 0,
    //                         "total_likes": 101,
    //                         "total_photos": 26,
    //                         "accepted_tos": true,
    //                         "for_hire": false,
    //                         "social": {
    //                             "instagram_username": "timstief",
    //                             "portfolio_url": "http://timstief.ch/",
    //                             "twitter_username": null,
    //                             "paypal_email": null
    //                         }
    //                     }
    //                 }
    //             }
    //         },
    //         {
    //             "type": "search",
    //             "title": "countryside"
    //         },
    //         {
    //             "type": "search",
    //             "title": "weapon"
    //         },
    //         {
    //             "type": "search",
    //             "title": "vehicle"
    //         },
    //         {
    //             "type": "landing_page",
    //             "title": "airplane",
    //             "source": {
    //                 "ancestry": {
    //                     "type": {
    //                         "slug": "images",
    //                         "pretty_slug": "Images"
    //                     },
    //                     "category": {
    //                         "slug": "things",
    //                         "pretty_slug": "Things"
    //                     },
    //                     "subcategory": {
    //                         "slug": "airplane",
    //                         "pretty_slug": "Airplane"
    //                     }
    //                 },
    //                 "title": "Airplane pictures & images",
    //                 "subtitle": "Download free airplane images",
    //                 "description": "Choose from a curated selection of airplane photos. Always free on Unsplash.",
    //                 "meta_title": "Best 20+ Airplane Pictures [HD] | Download Free Images on Unsplash",
    //                 "meta_description": "Choose from hundreds of free airplane pictures. Download HD airplane photos for free on Unsplash.",
    //                 "cover_photo": {
    //                     "id": "qmWqUl8Uvsc",
    //                     "slug": "qmWqUl8Uvsc",
    //                     "created_at": "2018-12-27T14:47:05Z",
    //                     "updated_at": "2023-06-02T18:04:44Z",
    //                     "promoted_at": null,
    //                     "width": 3024,
    //                     "height": 4032,
    //                     "color": "#265973",
    //                     "blur_hash": "LHFs*?0L8_xF%MDiRPtl8_%fnOM{",
    //                     "description": null,
    //                     "alt_description": "black and white airplane above high-ris ebuildings",
    //                     "urls": {
    //                         "raw": "https://images.unsplash.com/photo-1545922016-87c93aaca2ce?ixlib=rb-4.0.3",
    //                         "full": "https://images.unsplash.com/photo-1545922016-87c93aaca2ce?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                         "regular": "https://images.unsplash.com/photo-1545922016-87c93aaca2ce?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                         "small": "https://images.unsplash.com/photo-1545922016-87c93aaca2ce?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                         "thumb": "https://images.unsplash.com/photo-1545922016-87c93aaca2ce?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1545922016-87c93aaca2ce"
    //                     },
    //                     "links": {
    //                         "self": "https://api.unsplash.com/photos/qmWqUl8Uvsc",
    //                         "html": "https://unsplash.com/photos/qmWqUl8Uvsc",
    //                         "download": "https://unsplash.com/photos/qmWqUl8Uvsc/download",
    //                         "download_location": "https://api.unsplash.com/photos/qmWqUl8Uvsc/download"
    //                     },
    //                     "likes": 375,
    //                     "liked_by_user": false,
    //                     "current_user_collections": [],
    //                     "sponsorship": null,
    //                     "topic_submissions": {},
    //                     "premium": false,
    //                     "plus": false,
    //                     "user": {
    //                         "id": "XhvBBo1dSig",
    //                         "updated_at": "2023-05-29T15:30:47Z",
    //                         "username": "nathanhobbs",
    //                         "name": "Nathan Hobbs",
    //                         "first_name": "Nathan",
    //                         "last_name": "Hobbs",
    //                         "twitter_username": "nate2h",
    //                         "portfolio_url": null,
    //                         "bio": "Projecting my life through my lens.",
    //                         "location": null,
    //                         "links": {
    //                             "self": "https://api.unsplash.com/users/nathanhobbs",
    //                             "html": "https://unsplash.com/@nathanhobbs",
    //                             "photos": "https://api.unsplash.com/users/nathanhobbs/photos",
    //                             "likes": "https://api.unsplash.com/users/nathanhobbs/likes",
    //                             "portfolio": "https://api.unsplash.com/users/nathanhobbs/portfolio",
    //                             "following": "https://api.unsplash.com/users/nathanhobbs/following",
    //                             "followers": "https://api.unsplash.com/users/nathanhobbs/followers"
    //                         },
    //                         "profile_image": {
    //                             "small": "https://images.unsplash.com/profile-1545922049811-deb8ad409a67?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //                             "medium": "https://images.unsplash.com/profile-1545922049811-deb8ad409a67?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //                             "large": "https://images.unsplash.com/profile-1545922049811-deb8ad409a67?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //                         },
    //                         "instagram_username": "nathanmhobbs",
    //                         "total_collections": 0,
    //                         "total_likes": 12,
    //                         "total_photos": 6,
    //                         "accepted_tos": true,
    //                         "for_hire": false,
    //                         "social": {
    //                             "instagram_username": "nathanmhobbs",
    //                             "portfolio_url": null,
    //                             "twitter_username": "nate2h",
    //                             "paypal_email": null
    //                         }
    //                     }
    //                 }
    //             }
    //         },
    //         {
    //             "type": "search",
    //             "title": "aircraft"
    //         },
    //         {
    //             "type": "search",
    //             "title": "machine"
    //         },
    //         {
    //             "type": "search",
    //             "title": "wheel"
    //         },
    //         {
    //             "type": "search",
    //             "title": "artillery"
    //         }
    //     ],
    //     "tags_preview": [
    //         {
    //             "type": "search",
    //             "title": "uk"
    //         },
    //         {
    //             "type": "search",
    //             "title": "glossop"
    //         },
    //         {
    //             "type": "search",
    //             "title": "b29 overexposed crash site"
    //         }
    //     ],
    //     "views": 200809,
    //     "downloads": 2898,
    //     "topics": []
    // };

    return NextResponse.json({ quote,wallpaper });
}

