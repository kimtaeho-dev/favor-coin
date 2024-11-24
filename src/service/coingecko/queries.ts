import CoingeckoService from '@/service/coingecko/coingeckoService';

const queryKeys = {
  trendCoins: ['trendCoins'] as const,
  coinDetail: (id: string) => ['coinDetail', id] as const,
};

const queryOptions = {
  trendCoins: () => ({
    queryKey: queryKeys.trendCoins,
    queryFn: () => CoingeckoService.getTrendCoins(),
  }),
  coinDetail: (id: string) => ({
    queryKey: queryKeys.coinDetail(id),
    queryFn: () => CoingeckoService.getCoinData(id),
  }),
};

export default queryOptions;
