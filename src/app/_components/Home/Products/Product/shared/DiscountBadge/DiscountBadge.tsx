export default function DiscountBadge({
  discountPercentage,
}: {
  discountPercentage: number;
}) {
  return (
    <div className="bg-secondary absolute top-0 left-4 z-10 flex flex-col items-center justify-center rounded-b-sm p-1 text-white">
      <span className="font-bold">%{discountPercentage.toFixed(0)}</span>
      <span className="text-[10px] font-light">تخفیف</span>
    </div>
  );
}
