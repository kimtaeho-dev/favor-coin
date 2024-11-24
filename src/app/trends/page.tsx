import CoingeckoService from '@/service/coingecko/coingeckoService';

import TrendCoinList from './_components/TrendCoinList';

export default async function TrendsPage() {
  const { coins: trendCoins } = await CoingeckoService.getTrendCoins();

  return (
    <div className="w-full pb-10">
      <TrendCoinList trendCoins={trendCoins} />
    </div>
  );
}
