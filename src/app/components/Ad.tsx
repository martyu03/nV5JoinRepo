"use client";

import { useEffect } from "react";

interface AdProps {
  id: string;
  path: string;
  sizes: number[][];
  mapping?: { viewport: number[]; sizes: number[][] }[];
  collapseEmptyDiv?: boolean;
}

const Ad: React.FC<AdProps> = ({ id, path, sizes, mapping = [], collapseEmptyDiv = true }) => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.googletag) {
      googletag.cmd.push(() => {
        const slot = googletag
          .defineSlot(path, sizes, id)
          .addService(googletag.pubads());

        if (mapping.length > 0) {
          const sizeMapping = googletag.sizeMapping();
          mapping.forEach((map) => sizeMapping.addSize(map.viewport, map.sizes));
          slot.defineSizeMapping(sizeMapping.build());
        }

        if (collapseEmptyDiv) {
          slot.setCollapseEmptyDiv(true);
        }

        googletag.pubads().enableSingleRequest();

        googletag.enableServices();
        googletag.display(id);
      });
    }
  }, [id, path, sizes, mapping, collapseEmptyDiv]);

  return <div id={id}></div>;
};

export default Ad;
