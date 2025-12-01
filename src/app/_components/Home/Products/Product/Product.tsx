import Image from "next/image";
import CartActionButton from "./CartActionButton/CartActionButton";
import { getFinalPrice } from "@/utils/get-final-price";

export default function Product({ product }: { product: IProduct }) {
  const finalPrice = getFinalPrice(product).toLocaleString("fa-IR");

  return (
    <div className="relative flex gap-2 rounded-2xl p-4 shadow-xl">
      {!!product.discountPercentage && (
        <div className="bg-secondary absolute top-0 left-4 flex flex-col items-center justify-center rounded-b-sm p-1 text-white">
          <span className="font-bold">
            %{product.discountPercentage.toFixed(0)}
          </span>
          <span className="text-[10px] font-light">تخفیف</span>
        </div>
      )}
      <div className="relative aspect-square size-[110px]">
        <Image src={product.images[0]!} fill alt={product.title} />
        <CartActionButton product={product} />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex w-full flex-col">
          <h5 className="w-2/3 font-bold text-white">{product.title}</h5>
          <h6 className="text-muted-foreground mt-4 text-end font-semibold capitalize">
            {product.category}
          </h6>
          <p className="text-muted-foreground my-1.5 line-clamp-2 text-sm leading-loose">
            {product.description}
          </p>
        </div>
        <div className="mt-0.5 flex flex-col items-end">
          <span className="text-muted-foreground gap-px text-end text-sm font-light line-through">
            {product.price.toLocaleString("fa-IR")} تومان
          </span>
          <span className="text-muted-foreground text-end font-light">
            <span className="ml-px text-white">{finalPrice}</span>
            تومان
          </span>
        </div>
      </div>
    </div>
  );
}
