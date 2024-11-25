'use client';

import { TrendCoin } from '@/model/coin';
import { MouseEvent, useEffect, useState } from 'react';

import { LocalStorage, StorageKey } from '@/app/_shared/lib/localStorage';

import TrendCoinItem from './TrendCoinItem';

type Props = {
  trendCoins: TrendCoin[];
};

export default function TrendCoinList({ trendCoins }: Props) {
  const [favoriteCoins, setFavoriteCoins] = useState<string[]>([]);

  // sync from localStorage
  useEffect(() => {
    const storedFavoriteCoins = LocalStorage.getItem<string[]>(StorageKey.FavoriteCoins);

    if (storedFavoriteCoins) {
      setFavoriteCoins(storedFavoriteCoins);
    }
  }, []);

  // sync to localStorage
  useEffect(() => {
    if (favoriteCoins.length) {
      LocalStorage.setItem<string[]>(StorageKey.FavoriteCoins, favoriteCoins);
    }
  }, [favoriteCoins]);

  const handleToggleFavorite = (id: string) => (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setFavoriteCoins((prevCoins) =>
      prevCoins.includes(id) ? prevCoins.filter((coinId) => coinId !== id) : [...prevCoins, id],
    );
  };

  return (
    <div className="flex flex-col w-[72rem] items-center gap-5 mx-auto">
      {trendCoins.map((trendCoin) => {
        const isFavorite = !!favoriteCoins.find(
          (favoriteCoin) => favoriteCoin === trendCoin.item.id,
        );

        return (
          <TrendCoinItem
            key={trendCoin.item.coinId}
            trendCoin={trendCoin}
            isFavorite={isFavorite}
            onToggleFavorite={handleToggleFavorite(trendCoin.item.id)}
          />
        );
      })}
    </div>
  );
}
