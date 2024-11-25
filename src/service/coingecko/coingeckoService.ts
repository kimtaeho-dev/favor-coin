import APIService from '../service';

import { CoinDetail, TrendCoinResponse } from '../../model/coin';

class CoingeckoService extends APIService {
  getTrendCoins() {
    return this.get<TrendCoinResponse>('/search/trending');
  }

  getCoinData(id: string) {
    return this.get<CoinDetail>(
      `/coins/${id}?` +
        new URLSearchParams({
          tickers: 'false',
          sparkline: 'true',
        }).toString(),
      {
        headers: {
          'x-cg-demo-api-key': 'CG-LR9DCdHovmxat43PBGMbwXbZ',
        },
      },
    );
  }
}

export default new CoingeckoService('https://api.coingecko.com/api/v3');
