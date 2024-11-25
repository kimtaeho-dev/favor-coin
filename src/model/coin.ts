export type TrendCoin = {
  item: {
    id: string;
    coinId: string;
    name: string;
    symbol: string;
    marketCapRank: number;
    thumb: string; // coin thumb image url
    small: string; // coin small image url
    large: string; // coin small image url
    slug: string; // coin web slug
    priceBtc: number;
    score: number;
    data: {
      price: number;
      priceBtc: string;
      priceChangePercentage24H: CoinPriceInfoBase;
      marketCap: string;
      marketCapBtc: string;
      totalVolume: string;
      totalVolumeBtc: string;
      sparkline: string;
      content: string;
    };
  };
};

export type TrendCoinResponse = {
  coins: TrendCoin[];
};

export type CoinDetail = {
  id: string;
  symbol: string;
  name: string;
  description: {
    en: string;
    ko: string;
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  sentimentVotesUpPercentage: number;
  sentimentVotesDownPercentage: number;
  marketData: {
    currentPrice: CoinPriceInfoBase;
    ath: CoinPriceInfoBase;
    athChangePercentage: CoinPriceInfoBase;
    atl: CoinPriceInfoBase;
    atlChangePercentage: CoinPriceInfoBase;
    marketCap: CoinPriceInfoBase;
    totalVolume: CoinPriceInfoBase;
    priceChangePercentage24H: number;
    totalSupply: number;
    maxSupply: number | null;
    circulatingSupply: number;
    sparkline7D: {
      price: number[];
    };
    lastUpdated: string;
  };
};

type CoinPriceInfoBase = {
  btc: number;
  usd: number;
};
