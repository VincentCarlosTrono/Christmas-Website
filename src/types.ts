export interface TitleProps {
    title: string;
  }
  export interface GiftInterface {
    image: string;
    price: string;
    name: string;
  }
 export type Gifts = Array<GiftInterface>;

 export interface FeatureInterface {
    image: string;
    name: string;
    definition: string;
  }
export type Features = Array<FeatureInterface>;
  
export interface FooterInfoInterface {
    title: string;
    item1: string;
    item2: string;
    item3: string;
  }
  export type FooterInfos = Array<FooterInfoInterface>;

  export interface GiftListInterface {
    image: string;
    price: string;
    name: string;
  }
  export type GiftLists = Array<GiftListInterface>;

  export interface NavigationInterface {
    name: string;
    link: string;
    isActive?: boolean;
  }
  export type Navigations = Array<NavigationInterface>;
  
  
  