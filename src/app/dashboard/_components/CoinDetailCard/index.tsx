'use client';

import classNames from 'classnames';

import { useCoinDetail } from '@/service/coingecko/useCoingeckoService';

import CoinInfoRow from './CoinInfoRow';
import CoinSparkline from './CoinSparkline';
import CoinCommunityReaction from './CoinCommunityReaction';

type Props = {
  id: string;
};

export default function CoinDetailCard({ id }: Props) {
  const { data } = useCoinDetail({ id });

  if (!data) return null;

  const {
    image,
    name,
    symbol,
    marketData,
    sentimentVotesUpPercentage,
    sentimentVotesDownPercentage,
  } = data;
  const isUptrend = marketData.priceChangePercentage24H > 0;

  return (
    <div className="flex w-full gap-5 p-6 border border-gray-100 rounded-lg shadow-lg">
      <div className="flex flex-col flex-1 gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <img className="w-7 h-7 rounded-full" src={image.large} />
            <div className="flex items-center gap-1">
              <div className="text-lg font-semibold">{name}</div>
              <div className="text-sm text-gray-500">{symbol.toUpperCase()}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-3xl font-bold">
              US${marketData.currentPrice.usd.toLocaleString()}
            </div>
            <div
              className={classNames('text-xl font-semibold', {
                'text-green-500': isUptrend,
                'text-red-500': !isUptrend,
              })}
            >
              {marketData.priceChangePercentage24H.toFixed(1)}%
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-sm font-medium">
          <CoinInfoRow label="역대 최고가" data={`US\$${marketData.ath.usd.toLocaleString()}`} />
          <CoinInfoRow label="역대 최저가" data={`US\$${marketData.atl.usd.toLocaleString()}`} />
          <CoinInfoRow label="시가총액" data={`US\$${marketData.marketCap.usd.toLocaleString()}`} />
          <CoinInfoRow label="유통량" data={marketData.circulatingSupply.toLocaleString()} />
          <CoinInfoRow label="총 공급량" data={marketData.totalSupply.toLocaleString()} />
          <CoinInfoRow
            label="최대공급량"
            data={marketData.maxSupply ? marketData.maxSupply.toLocaleString() : '∞'}
          />
        </div>
      </div>

      <div className="flex-[1]">
        <CoinSparkline marketData={marketData} />
      </div>

      <div className="flex-[1]">
        <CoinCommunityReaction
          name={name}
          sentimentVotesUpPercentage={sentimentVotesUpPercentage}
          sentimentVotesDownPercentage={sentimentVotesDownPercentage}
          lastUpdated={marketData.lastUpdated}
        />
      </div>
    </div>
  );
}
