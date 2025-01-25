import Head from 'next/head';
import { useEffect, useState } from 'react';

const GPTAdComponent = ({ pageNav }) => {
  const [gptInitialized, setGptInitialized] = useState(false);

  useEffect(() => {
    // Initialize GPT after the page has mounted
    if (window.googletag && !gptInitialized) {
      setGptInitialized(true);

      googletag.cmd.push(function () {
        let gptAdSlots = [];
        
        if (window.innerWidth <= 768) { // Mobile view
          if (pageNav === "home") {
            gptAdSlots.push(
              googletag.defineSlot('/14668236/Mobile_News5_Home_320x50_320x100_1', [[320, 100], [320, 50]], 'div-gpt-ad-1490684665994-0').addService(googletag.pubads()),
              googletag.defineSlot('/14668236/Mobile_News5_Home_300x250_1', [300, 250], 'div-gpt-ad-1490684951422-0').addService(googletag.pubads())
            );
          }
          // Add other conditions for mob   ile
        } else { // Desktop view
          if (pageNav === "home") {
            gptAdSlots.push(
              googletag.defineSlot('/14668236/News5_Home_728x90_970x90_1', [[970, 90], [728, 90]], 'div-gpt-ad-1490594628256-0').addService(googletag.pubads()),
              googletag.defineSlot('/14668236/News5_Home_728x90_970x90_2', [[728, 90], [970, 90]], 'div-gpt-ad-1490595827953-0').addService(googletag.pubads())
            );
          }
          // Add other conditions for desktop
        }
      });
    }
  }, [pageNav, gptInitialized]);

  return (
    <>
      <Head>
        <script async src="https://www.googletagservices.com/tag/js/gpt.js"></script>
      </Head>
      
      {/* Here you would place the divs for the ad slots */}
      <div id="div-gpt-ad-1490684665994-0" style={{ width: '320px', height: '50px' }}></div>
      <div id="div-gpt-ad-1490684951422-0" style={{ width: '300px', height: '250px' }}></div>
      {/* Add more ad slot divs as needed */}
    </>
  );
};

export default GPTAdComponent;
