import { coingeckoAPI } from '@/core/api/coingecko';
import { TrendCoinResponse } from '@/core/schema/coin';
import TrendCoinList from './_components/TrendCoinList';

export default async function TrendsPage() {
  const { coins: trendCoins } = await coingeckoAPI.get<TrendCoinResponse>('/search/trending');

  return (
    <div className="w-full pb-10">
      <TrendCoinList trendCoins={trendCoins} />
    </div>
  );
}
