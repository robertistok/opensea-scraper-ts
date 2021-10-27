export interface IRanking {
  slug: string;
  thumbanil?: string;
  rank: number;
}

export interface IOffer {
  floorPrice: { amount: number; currency: string };
  tokenId: number;
  tokenName: string;
  offerUrl: string;
}

interface IOfferRturnValue {
  offers: IOffer[];
  stats: { totalOffersCount: number };
}

export interface IFnOpts {
  mode?: string;
  browser?: any;
}

interface IScraperInstance {
  close: () => void;
  basicInfo: (slug: string) => Promise<Record<string, any>>;
  floorPrice: (slug: string, opts?: IFnOpts) => Promise<number | undefined>;
  floorPriceByUrl: (
    slug: string,
    opts?: IFnOpts
  ) => Promise<number | undefined>;
  rankings: (nPages?: string, opts?: IFnOpts) => Promise<IRanking[]>;
  offers: (
    nPages?: string,
    resultSize?: number,
    opts?: IFnOpts
  ) => Promise<IOfferRturnValue>;
  offersByUrl: (
    url: string,
    resultSize?: number,
    opts?: IFnOpts
  ) => Promise<IOfferRturnValue>;
}

declare module "opensea-scraper-ts" {
  export function getInstanceWithPuppeteer(): IScraperInstance;
  export function basicInfo(slug: string): Promise<Record<string, any>>;
  export function floorPrice(
    slug: string,
    opts?: IFnOpts
  ): Promise<number | undefined>;
  export function floorPriceByUrl(
    slug: string,
    opts?: IFnOpts
  ): Promise<number | undefined>;
  export function rankings(
    nPages?: string,
    opts?: IFnOpts
  ): Promise<IRanking[]>;
  export function offers(
    nPages?: string,
    resultSize?: number,
    opts?: IFnOpts
  ): Promise<IOfferRturnValue>;
  export function offersByUrl(
    url: string,
    resultSize?: number,
    opts?: IFnOpts
  ): Promise<IOfferRturnValue>;
}
