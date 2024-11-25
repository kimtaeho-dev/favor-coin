import { CoinDetail } from '@/model/coin';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';

type Props = {
  marketData: CoinDetail['marketData'];
};

export default function CoinSparkline({ marketData }: Props) {
  const isUptrend = marketData.priceChangePercentage24H > 0;

  return (
    <div className="flex flex-col justify-end items-end h-full">
      <div className="text-sm text-gray-500 font-semibold pr-2">지난 7일 변동 추이</div>
      <ResponsiveContainer width="100%" height={232}>
        <AreaChart
          data={marketData.sparkline7D.price.map((price, index) => ({
            name: `price${index}`,
            price,
          }))}
        >
          <Area
            dataKey="price"
            fillOpacity={0.2}
            stroke={isUptrend ? '#22c55e' : '#ef4444'}
            fill={isUptrend ? '#22c55e' : '#ef4444'}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
