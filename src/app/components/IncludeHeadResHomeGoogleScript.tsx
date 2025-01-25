import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Google GPT Script for Ads */}
          <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Ad Script */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.googletag = window.googletag || {cmd: []};
                var gptAdSlots = [];
                googletag.cmd.push(function() {
                  var mapping = googletag.sizeMapping().
                    addSize([728, 300], [[728, 90], [970,90]]).
                    addSize([0,0], [320, 50]).
                    build();  
                  var mapping1 = googletag.sizeMapping().
                    addSize([728, 300], [[728, 90], [300, 250]]).
                    addSize([0,0], [[320, 50], [320, 100], [336, 280]]).
                    build(); 
                  var mapping2 = googletag.sizeMapping().
                    addSize([980, 690], [[300, 600], [300, 250], [120, 600], [160, 600], [336, 280]]).
                    addSize([728, 300], [[300, 250], [336, 280]]).
                    addSize([0,0], []).
                    build(); 
                  gptAdSlots[0] = googletag.defineSlot('/21622890900/PH_news.tv5.com.ph_res_home_top1_728x90//970x90//320x50', [[320, 50], [728, 90], [970, 90]], 'div-gpt-ad-1572495777724-0').defineSizeMapping(mapping).setCollapseEmptyDiv(true).addService(googletag.pubads()); 
                  gptAdSlots[1] = googletag.defineSlot('/21622890900/PH_news.tv5.com.ph_res_home_top2_728x90//300x250//320x50//320x100//336x280', [[336, 280], [320, 50], [320, 100], [728, 90], [300, 250]], 'div-gpt-ad-1572495987926-0').defineSizeMapping(mapping1).setCollapseEmptyDiv(true).addService(googletag.pubads());
                  gptAdSlots[2] = googletag.defineSlot('/21622890900/PH_news.tv5.com.ph_res_home_mid1_728x90//300x250//320x50//320x100//336x280', [[336, 280], [320, 50], [320, 100], [300, 250], [728, 90]], 'div-gpt-ad-1572496100541-0').defineSizeMapping(mapping1).setCollapseEmptyDiv(true).addService(googletag.pubads());
                  gptAdSlots[3] = googletag.defineSlot('/21622890900/PH_news.tv5.com.ph_res_home_right1_300x250//300x600//120x600//160x600//336x280', [[160, 600], [336, 280], [300, 600], [300, 250], [120, 600]], 'div-gpt-ad-1572849442169-0').defineSizeMapping(mapping2).setCollapseEmptyDiv(true).addService(googletag.pubads());
                  googletag.pubads().enableSingleRequest();
                  googletag.enableServices();
                });

                // Sticky bottom ad for small screens
                var width = window.innerWidth || document.documentElement.clientWidth;
                if (width < 468) {
                  googletag.cmd.push(function() {
                    googletag.defineSlot('/21622890900/PH_news.tv5.com.ph_mb_all_bottom_sticky_320x50', [320, 50], 'div-gpt-ad-1572851336340-0').addService(googletag.pubads());
                    googletag.pubads().enableSingleRequest();
                    googletag.enableServices();
                  });
                }
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
