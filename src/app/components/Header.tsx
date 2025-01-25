import React from 'react';
import Head from 'next/head';

interface HeaderProps {
    pageTitle: string;
    fbMeta?: string;
    ogTitle: string;
    ogDesc: string;
    ogImage: string;
    ogTags?: string;
    ogPageTitle: string;
    moatCode?: string;
    fbPixel?: string;
    googAd?: string;
    headerTaboola?: string;
}

const Header: React.FC<HeaderProps> = ({ 
    pageTitle, 
    fbMeta, 
    ogTitle, 
    ogDesc, 
    ogImage, 
    ogTags, 
    ogPageTitle, 
    moatCode, 
    fbPixel, 
    googAd, 
    headerTaboola 
}) => {
    const pageUrl = typeof window !== 'undefined' && window.location.href;

    return (
        <>
            <Head>
                {/* Google Tag Manager */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-K9Q9ZHZ');`
                    }}
                />
                <meta charSet="utf-8" />
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <title>{pageTitle}</title>

                {/* Other meta tags */}
                <meta name='dailymotion-domain-verification' content='dmuko9ptmk7q6o0vb' />
                <meta name="HandheldFriendly" content="True"/>
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                <meta property="fb:pages" content="163550757135020" />
                <meta name="google-site-verification" content="ocsahY1T4_ERBMgYLW9OkU47o9JtaGQb672_194AjPA" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png"/>

                {/* Open Graph meta tags */}
                <meta name="title" property="og:title" content={ogTitle} />
                <meta property="og:type" content="website" />
                <meta name="url" property="og:url" content={pageUrl} />
                <meta name="image" property="og:image" content={ogImage} />
                <meta name="description" property="og:description" content={ogDesc} />
                <meta name="sitename" property="og:site_name" content={ogPageTitle} />
                <meta name="keywords" content={ogTags}/>
                <meta name="twitter:title" content={ogTitle}/>
                <meta name="twitter:description" content={ogDesc}/>
                <meta name="twitter:image" content={ogImage}/>
                <meta name="twitter:card" content="summary_large_image"/>

                {/* Favicon */}
                <link type="image/x-icon" href="/assets/images/news-fav.png" rel="shortcut icon"/>

                {/* Font Awesome */}
                <link rel="stylesheet" href="/assets/fontawesome/css/all.min.css"/>

                {/* Google Fonts */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans|Oswald:200"/> 
                
                {/* CSS Files */}
                <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/assets/css/swiper.min.css"/>
                <link rel="stylesheet" href="/assets/css/framework-main.css?v=20230707"/>
                <link rel="stylesheet" href="/assets/css/framework-grid.css?v=20190508"/>

                {/* Custom Scripts */}
                <script data-ad-client="ca-pub-8355974621915578" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <script src="/assets/js/jquery.min.js"></script>
                <script src="/assets/js/bootstrap.js"></script>
                <script src="/assets/js/framework-main.js?v=20241205"></script>

                {/* Custom Scripts for Moat and Facebook Pixel */}
                {moatCode && (
                    <script dangerouslySetInnerHTML={{ __html: moatCode }} />
                )}
                {fbPixel && (
                    <script dangerouslySetInnerHTML={{ __html: fbPixel }} />
                )}
            </Head>

            {/* Body Content */}
            {/* <div className="screen-view">
                <div className="loading">
                    <div className="loading-row">
                        <div className="box">
                            <img src="images/NEWS5 logo 2019 final-01.png" alt="News5 Logo"/>
                            <div className="text">Loading</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Header;
