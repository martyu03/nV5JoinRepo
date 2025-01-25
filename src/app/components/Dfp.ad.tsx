import { useEffect } from 'react';

interface AdProps {
  adId: string; // ID for the ad container
}

const DfpAd: React.FC<AdProps> = ({ adId }) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.googletag) {
      // Safely push the ad display command to the Google tag queue
      window.googletag.cmd.push(() => {
        window.googletag.display(adId);
      });
    }
  }, [adId]);

  return <div id={adId}></div>;
};

export default DfpAd;
