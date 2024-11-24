import { useQuery } from '@tanstack/react-query';

import queryOptions from './queries';

export function useTrendCoins() {
  return useQuery(queryOptions.trendCoins());
}

export function useCoinDetail({ id }: { id: string }) {
  return useQuery(queryOptions.coinDetail(id));
}
