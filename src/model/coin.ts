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
      priceChangePercentage24H: {
        btc: number;
        usd: number;
      };
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

export type CoinData = {};
