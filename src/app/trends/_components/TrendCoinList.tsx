import { TrendCoin } from '@/core/schema/coin';

import TrendCoinItem from './TrendCoinItem';

type Props = {
  trendCoins: TrendCoin[];
};

export default function TrendCoinList({ trendCoins }: Props) {
  return (
    <div className="flex flex-col w-[72rem] items-center gap-5 mx-auto">
      {trendCoins.map((trendCoin) => (
        <TrendCoinItem key={trendCoin.item.coinId} trendCoin={trendCoin} />
      ))}
    </div>
  );
}
