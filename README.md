# Favor Coin

CoinGecko API를 활용하여 인기 암호화폐를 탐색하고, 즐겨찾기하여 나만의 대시보드를 구성하는 웹 애플리케이션입니다.

## 주요 기능

### 트렌드 (`/trends`)
- CoinGecko 실시간 인기 코인 목록 조회 (서버 사이드 렌더링)
- 코인별 24시간 가격 변동률, 시가총액, 거래량, 7일 스파크라인 차트 표시
- 즐겨찾기 토글 (localStorage 기반 저장)
- 코인 클릭 시 CoinGecko 상세 페이지로 이동

### 대시보드 (`/dashboard`)
- 즐겨찾기한 코인의 상세 정보 카드 표시
- 현재가, 역대 최고/최저가, 시가총액, 유통량, 총 공급량, 최대 공급량
- 7일 가격 추이 차트 (Recharts)
- 커뮤니티 감성 분석 (상승/하락 투표 비율)

## 기술 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | Next.js 15 (App Router) |
| 언어 | TypeScript 5 |
| UI | React 19, Tailwind CSS 3 |
| 데이터 페칭 | TanStack React Query 5 |
| 차트 | Recharts 2 |
| API | CoinGecko API |
| 폰트 | Pretendard |

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 린트 검사
npm run lint
```

## 프로젝트 구조

```
src/
├── app/
│   ├── _shared/           # 공통 컴포넌트, 유틸, 프로바이더
│   │   ├── components/    # Header
│   │   ├── lib/           # format, localStorage 유틸
│   │   └── provider/      # React Query Provider
│   ├── dashboard/         # 대시보드 페이지
│   │   └── _components/   # CoinDetailCard (차트, 감성분석 등)
│   └── trends/            # 트렌드 페이지
│       └── _components/   # TrendCoinList, TrendCoinItem
├── model/                 # 타입 정의 (Coin, APIError)
└── service/               # API 서비스 레이어
    └── coingecko/         # CoinGecko API 연동 및 Query Options
```
