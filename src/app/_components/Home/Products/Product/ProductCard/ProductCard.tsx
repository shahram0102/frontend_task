import Image from "next/image";
import CartActionButton from "../shared/CartActionButton/CartActionButton";
import { getFinalPrice } from "@/utils/get-final-price";
import DiscountBadge from "../shared/DiscountBadge/DiscountBadge";

export default function ProductCard({ product }: { product: IProduct }) {
  const { title, category, description, price, images, discountPercentage } =
    product;

  const finalPrice = getFinalPrice(product).toLocaleString("fa-IR");

  return (
    <div className="relative flex gap-2 rounded-2xl p-4 shadow-2xl">
      {!!discountPercentage && (
        <DiscountBadge discountPercentage={discountPercentage} />
      )}
      <div className="relative aspect-square size-[110px]">
        <Image src={images[0]!} fill alt={title} />
        <CartActionButton product={product} />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="flex w-full flex-col">
          <h5 className="w-2/3 font-bold text-white">{title}</h5>
          <h6 className="text-muted-foreground mt-4 text-end font-semibold capitalize">
            {category}
          </h6>
          <p className="text-muted-foreground my-1.5 line-clamp-2 text-sm leading-loose">
            {description}
          </p>
        </div>
        <div className="mt-0.5 flex flex-col items-end">
          <span className="text-muted-foreground gap-px text-end text-sm font-light line-through">
            {price.toLocaleString("fa-IR")} تومان
          </span>
          <span className="text-muted-foreground text-end font-light">
            <span className="ml-px text-white">{finalPrice} </span>
            تومان
          </span>
        </div>
      </div>
    </div>
  );
}
