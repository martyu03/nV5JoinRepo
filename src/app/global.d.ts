declare global {
    interface Window {
      googletag?: Googletag; 
    }
  
    interface Googletag {
      cmd: Array<() => void>;
      defineSlot: (adUnitPath: string, size: googletag.GeneralSize, divId: string) => googletag.Slot;
      pubads: () => googletag.PubAdsService;
      enableServices: () => void;
      sizeMapping: () => googletag.SizeMappingBuilder;
      display: (divId: string) => void;
    }
  
    namespace googletag {
      type GeneralSize = SingleSize | MultiSize;
      type SingleSize = [number, number];
      type MultiSize = SingleSize[];
  
      interface Slot {
        defineSizeMapping: (sizeMapping: SizeMappingArray) => Slot;
        addService: (service: PubAdsService) => Slot;
        setCollapseEmptyDiv: (collapse: boolean) => Slot;
      }
  
      interface PubAdsService {
        enableSingleRequest: () => void;
        setTargeting: (key: string, value: string | string[]) => PubAdsService;
        collapseEmptyDivs: (collapse: boolean) => void;
      }
  
      interface SizeMappingBuilder {
        addSize: (viewportSize: SingleSize, adSizes: GeneralSize) => SizeMappingBuilder;
        build: () => SizeMappingArray;
      }
  
      type SizeMappingArray = Array<{ viewport: SingleSize; sizes: GeneralSize }>;
    }
  }
  
  export {};
  