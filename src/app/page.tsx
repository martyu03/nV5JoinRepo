'use client';

import { useEffect } from 'react';
import Head from 'next/head';
import VideoDefault from './components/VideoDefault';
import GridDefault from './components/GridDefault';
import SocialFeed from './components/SocialFeed';
import Header from './components/Header';
import Footer from './components/Footer';
import Bottombar from './components/nav-bar/BottomBar';
import Topbar from './components/nav-bar/TopBar';
import Recent from './components/Recent';
import Trending from './components/Trending';
import Politics from './components/Politics';
import Police from './components/Police';
import Producers from './components/Producers';
import Sports from './components/Sports';
import Celebrity from './components/Celebrity';
import Lourd from './components/Lourd';
import Features from './components/Features';
import Foreign from './components/Foreign';
import Money from './components/Money';
import MoreNews from './components/MoreNews';

interface HomeProps {
  liveData: any;
  gridRecent: any;
  gridTrending: any;
  gridPolitics: any;
  gridPolice: any;
  gridProducers: any;
  gridSports: any;
  gridCelebrity: any;
  gridLourd: any;
  gridFeatures: any;
  gridForeign: any;
  gridMoney: any;
  gridMore: any;
}

const GridSection = ({ gridID, gridTitle, data }: { gridID: string; gridTitle: JSX.Element; data: any }) => (
  <GridDefault gridID={gridID} gridTitle={gridTitle} data={data} />
);

export default function Home({
  liveData,
  gridRecent,
  gridTrending,
  gridPolitics,
  gridPolice,
  gridProducers,
  gridSports,
  gridCelebrity,
  gridLourd,
  gridFeatures,
  gridForeign,
  gridMoney,
  gridMore,
}: HomeProps) {
  const pageTitle = "Home - News5";
  const fbMeta = {
    ogTitle: "Home - News5",
    ogImage: "/assets/images/home-image.jpg",
    ogDesc: "Stay updated with the latest news from the Philippines and around the world.",
    ogTags: "home, news, philippines, world",
  };

  useEffect(() => {
    // Placeholder for ad-related logic (if needed)
    // if (typeof window !== 'undefined' && window.googletag?.cmd) {
    //   window.googletag.cmd.push(() => {
    //     googletag.display('div-gpt-ad-1601382203204-0');
    //     googletag.display('div-gpt-ad-1650267620735-0');
    //     googletag.display('div-gpt-ad-1650268188242-0');
    //     googletag.display('div-gpt-ad-1650268680840-0');
    //     googletag.display('div-gpt-ad-1601382320005-0');
    //   });
    // }
  }, []);

  return (
    <div className="container w-full">
      {/* Meta Tags */}
      {/* <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={fbMeta.ogTitle} />
        <meta property="og:image" content={fbMeta.ogImage} />
        <meta property="og:description" content={fbMeta.ogDesc} />
        <meta property="og:tags" content={fbMeta.ogTags} />
      </Head> */}

      {/* Navigation Bar */}
      <div className="w-full fixed top-0 flex flex-col z-50">
        <Topbar />
        <Bottombar />
      </div>

      {/* Header Section */}
      <Header
        pageTitle={pageTitle}
        fbMeta={fbMeta}
        ogTitle={fbMeta.ogTitle}
        ogDesc={fbMeta.ogDesc}
        ogImage={fbMeta.ogImage}
        ogTags={fbMeta.ogTags}
        ogPageTitle={pageTitle}
        moatCode=""
        fbPixel=""
        googAd=""
        headerTaboola=""
      />

      {/* Main Content */}
      <VideoDefault liveData={liveData} />

      <div className="row">
        {/* Left Column */}
        <div className="col-md-8">
          <center>
            <div id="div-gpt-ad-1601382203204-0"></div>
          </center>

          {/* Dynamic Recent Section */}
          <Recent data={gridRecent} />

          {/* Trending Grid Section */}
          <Trending data={gridTrending} />

          {/* Politics, Police, Producers Grids */}
          <Politics data={gridPolitics} />

          <Police data={gridPolice} />

          <Producers data={gridProducers} />

          <center>
            <div id="div-gpt-ad-1650267620735-0"></div>
          </center>

          {/* Sports, Celebrity, Lourd, Features Grids */}

              <Sports data={gridSports} />

              <Celebrity data={gridCelebrity} />

              <Lourd data={gridLourd} />

              <Features data={gridFeatures} />

              <Foreign data={gridForeign} />

              <Money data={gridMoney} />


          <center>
            <div id="div-gpt-ad-1650268188242-0"></div>
          </center>

          <MoreNews data={gridMore} />
        </div>

        {/* Right Column */}
        <div className="col-md-4">
          <SocialFeed />

          <center>
            <div id="div-gpt-ad-1601382320005-0"></div>
          </center>
        </div>
      </div>

      <center>
        <div id="div-gpt-ad-1650268680840-0"></div>
      </center>
    </div>
  );
}

// Component for creating grid section titles
const GridTitle = ({ label }: { label: string }) => (
  <div className="flex flex-row">
    <div className="basis-1/3 bg-red-500 text-white px-1 py-1 ml-10 inline-block">{label}</div>
    <div className="basis-2/3 bg-black px-1 py-1"></div>
  </div>
);
