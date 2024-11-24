import { TrendCoinResponse } from '../../model/coin';
import APIService from '../service';

class CoingeckoService extends APIService {
  getTrendCoins() {
    return this.get<TrendCoinResponse>('/search/trending');
  }

  getCoinData(id: string) {
    return this.get<any>(
      `/coin/${id}` +
        new URLSearchParams({
          localization: 'false',
          tickers: 'false',
          market_data: 'false',
          community_data: 'false',
          developer_data: 'false',
          sparkline: 'true',
        }).toString(),
    );
  }
}

export default new CoingeckoService('https://api.coingecko.com/api/v3');
