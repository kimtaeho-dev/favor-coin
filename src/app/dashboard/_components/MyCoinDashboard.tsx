'use client';

import { useEffect, useState } from 'react';

import { LocalStorage, StorageKey } from '@/app/_shared/lib/localStorage';
import CoinDetailCard from './CoinDetailCard';

export default function MyCoinDashboard() {
  const [favoriteCoins, setFavoriteCoins] = useState<string[]>([]);

  // sync from localStorage
  useEffect(() => {
    const storedFavoriteCoins = LocalStorage.getItem<string[]>(StorageKey.FavoriteCoins);

    if (storedFavoriteCoins) {
      setFavoriteCoins(storedFavoriteCoins);
    }
  }, []);

  return (
    <div className="flex flex-col gap-9 w-[72rem] mx-auto">
      {favoriteCoins.map((favoriteCoin) => (
        <CoinDetailCard key={favoriteCoin} id={favoriteCoin} />
      ))}
    </div>
  );
}
