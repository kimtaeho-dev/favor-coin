import classNames from 'classnames';
import { format } from 'date-fns';

type Props = {
  name: string;
  sentimentVotesUpPercentage: number;
  sentimentVotesDownPercentage: number;
  lastUpdated: string;
};

export default function CoinCommunityReaction({
  name,
  sentimentVotesUpPercentage,
  sentimentVotesDownPercentage,
  lastUpdated,
}: Props) {
  const isUptrend = sentimentVotesUpPercentage >= sentimentVotesDownPercentage;

  return (
    <div className="relative flex flex-col justify-center items-center gap-3 w-full h-full">
      <div className="text-lg text-center text-gray-800 font-semibold">
        <div>
          현재 커뮤니티는 <span className="text-black font-bold">{name}</span>에 대해
        </div>
        <div>
          <span
            className={classNames('font-bold', {
              'text-green-500': isUptrend,
              'text-red-500': !isUptrend,
            })}
          >
            {isUptrend ? '상승세' : '하락세'}
          </span>
          라고 평가합니다
          {isUptrend ? '!' : '...'}
        </div>
      </div>
      <div className="p-5 border border-gray-100 rounded-2xl shadow-xl">
        <div className="text-5xl">{isUptrend ? '🚀' : '👎'}</div>
      </div>
      <div className="absolute bottom-0 right-0">
        <div className="text-sm text-gray-500 font-semibold">
          마지막 업데이트 {format(lastUpdated, 'yyyy.mm.dd')}
        </div>
      </div>
    </div>
  );
}
