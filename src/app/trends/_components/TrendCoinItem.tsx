'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MouseEvent } from 'react';
import classNames from 'classnames';

import { TrendCoin } from '@/model/coin';
import { formatBitcoinToUsd } from '@/app/_shared/lib/format';

import Star from '@/app/_shared/icon/star.png';
import StarFilled from '@/app/_shared/icon/star_filled.png';

type Props = {
  trendCoin: TrendCoin;
  isFavorite: boolean;
  onToggleFavorite: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function TrendCoinItem({ trendCoin, isFavorite, onToggleFavorite }: Props) {
  const {
    item: {
      id,
      score,
      large: largeIconUrl,
      name,
      symbol,
      data: {
        priceChangePercentage24H,
        price,
        totalVolume,
        marketCap,
        sparkline: sparklineImageUrl,
      },
    },
  } = trendCoin;

  return (
    <Link
      className="flex items-center w-full p-6 cursor-pointer border border-gray rounded-lg shadow-md"
      prefetch={false}
      href={`https://www.coingecko.com/ko/%EC%BD%94%EC%9D%B8/${id}`}
      target="_blank"
    >
      <div className="text-lg font-semibold mr-2">#{score + 1}</div>

      <div className="flex flex-1 gap-2">
        <img className="w-7 h-7 rounded-full" src={largeIconUrl} />
        <div className="flex items-center gap-1">
          <div className="text-lg font-bold">{name}</div>
          <div className="text-sm text-gray-500 font-semibold">{symbol}</div>
        </div>
      </div>

      <div className="flex items-center font-medium text-end">
        <div>
          <div className="flex items-center justify-end text-xs gap-1">
            <div className="text-gray-500">시세</div>
            <div
              className={classNames('font-bold', {
                'text-green-500': priceChangePercentage24H.usd > 0,
                'text-red-500': priceChangePercentage24H.usd < 0,
              })}
            >
              {priceChangePercentage24H.usd.toFixed(1)}%
            </div>
          </div>
          <div className="w-[7.75rem]">{`US\$${formatBitcoinToUsd(price)}`}</div>
        </div>

        <div>
          <div className="text-xs text-gray-500">거래량</div>
          <div className="w-[11.25rem]">{`US${totalVolume}`}</div>
        </div>

        <div>
          <div className="text-xs text-gray-500">시가총액</div>
          <div className="w-[11.25rem]">{`US${marketCap}`}</div>
        </div>

        <div className="ml-6">
          <img className="w-28 h-auto" src={sparklineImageUrl} />
          <div className="text-xs text-gray-500">지난 7일</div>
        </div>

        <button className="ml-6" onClick={onToggleFavorite}>
          <Image width={22} height={22} alt="코인 즐겨찾기" src={isFavorite ? StarFilled : Star} />
        </button>
      </div>
    </Link>
  );
}
