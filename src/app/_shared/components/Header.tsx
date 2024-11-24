import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-center w-full p-4">
      <div className="flex items-center justify-between w-full max-w-[64rem]">
        <h1 className="text-3xl font-bold text-[#4bcc00]">Favor Coin</h1>
        <div className="flex gap-4">
          <Link href="/dashboard" className="font-bold">
            대시보드
          </Link>
          <Link href="/my-favor" className="font-bold">
            즐겨찾기
          </Link>
          <Link href="/trends" className="font-bold">
            트렌드
          </Link>
        </div>
      </div>
    </div>
  );
}
