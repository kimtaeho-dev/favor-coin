# Project Memory

이 파일은 Claude Code가 프로젝트 작업 중 학습한 내용을 기록하는 곳이다.
새로운 사실을 발견하면 적절한 섹션에 추가한다.

## 기술 스택

- **프레임워크**: Next.js 15.0.3 (App Router)
- **언어**: TypeScript 5
- **UI**: React 19 RC, Tailwind CSS 3.4
- **상태/데이터**: TanStack React Query 5
- **차트**: Recharts 2
- **유틸리티**: camelcase-keys, classnames, date-fns
- **린트/포맷**: ESLint (next/core-web-vitals + prettier), Prettier
- **패키지 매니저**: npm (package-lock.json 사용)

## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router 페이지
│   ├── _shared/            # 공유 컴포넌트, 유틸, 아이콘, 프로바이더
│   │   ├── components/     # Header 등 공통 컴포넌트
│   │   ├── fonts/          # Pretendard 폰트
│   │   ├── icon/           # 즐겨찾기 아이콘
│   │   ├── lib/            # format, localStorage 유틸
│   │   └── provider/       # React Query Provider
│   ├── dashboard/          # 대시보드 페이지 (즐겨찾기 코인 상세)
│   │   └── _components/    # CoinDetailCard, MyCoinDashboard
│   └── trends/             # 트렌드 페이지 (인기 코인 목록)
│       └── _components/    # TrendCoinItem, TrendCoinList
├── model/                  # 타입 정의 (coin.ts, global.ts)
└── service/                # API 서비스 레이어
    ├── service.ts          # APIService 베이스 클래스
    └── coingecko/          # CoinGecko API 연동
        ├── coingeckoService.ts
        ├── queries.ts      # TanStack Query options
        └── useCoingeckoService.ts
```

## 주요 명령어

- `npm run dev` — 개발 서버 실행
- `npm run build` — 프로덕션 빌드
- `npm run start` — 프로덕션 서버 실행
- `npm run lint` — ESLint 실행

## 코딩 패턴

- API 서비스는 클래스 기반 (`APIService` 상속), 싱글톤 인스턴스 export
- API 응답은 `camelcase-keys`로 자동 변환
- TanStack Query의 `queryOptions` 패턴 사용 (쿼리 키와 쿼리 함수를 객체로 관리)
- 페이지별 `_components` 디렉토리에 로컬 컴포넌트 배치
- 공유 리소스는 `_shared` 디렉토리에 배치
- 루트(`/`) 접근 시 `/dashboard`로 리다이렉트

## 의존성 & 외부 서비스

- **CoinGecko API**: `https://api.coingecko.com/api/v3` — 트렌드 코인, 코인 상세 데이터 조회
- **Vercel**: `.vercel` 디렉토리가 gitignore에 포함되어 있어 Vercel 배포 가능성 있음

## 알게 된 것들

- API 키가 코드에 하드코딩되어 있음 (`coingeckoService.ts`의 `x-cg-demo-api-key`) — 환경변수로 분리 필요
- Prettier 설정: 세미콜론 사용, 싱글 쿼트, trailing comma all, printWidth 100, 탭 2칸
- ESLint에서 `no-console: warn` 설정되어 있음
