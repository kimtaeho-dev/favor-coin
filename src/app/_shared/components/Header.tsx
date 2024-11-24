import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex items-center justify-between w-[72rem] px-2 py-6">
        <h1 className="text-3xl font-bold text-[#4bcc00]">Favor Coin</h1>
        <div className="flex gap-6">
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
