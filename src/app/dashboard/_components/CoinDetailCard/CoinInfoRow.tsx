type Props = { label: string; data: string };

export default function CoinInfoRow({ label, data }: Props) {
  return (
    <div className="flex justify-between items-center py-1">
      <div className="text-gray-500">{label}</div>
      <div className="font-semibold">{data}</div>
    </div>
  );
}
