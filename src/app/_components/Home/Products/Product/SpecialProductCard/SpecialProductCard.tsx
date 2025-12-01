import { getFinalPrice } from "@/utils/get-final-price";
import CartActionButton from "../shared/CartActionButton/CartActionButton";
import DiscountBadge from "../shared/DiscountBadge/DiscountBadge";
import ProductSlider from "./ProductSlider/ProductSlider";

export default function SpecialProductCard({ product }: { product: IProduct }) {
  const { title, category, description, price, discountPercentage } = product;
  const finalPrice = getFinalPrice(product).toLocaleString("fa-IR");

  return (
    <div className="relative h-[406px] rounded-2xl shadow-2xl">
      {!!discountPercentage && (
        <DiscountBadge discountPercentage={discountPercentage} />
      )}
      <ProductSlider product={product} />
      <div className="absolute top-8 right-0 z-10 rounded-l-lg bg-white/20 py-2 pr-2 pl-4 text-xs font-bold text-white backdrop-blur-sm">
        <span>پیشنهاد مجموعه</span>
      </div>
      <div className="from-muted via-muted absolute bottom-0 left-0 flex w-full flex-col gap-2 bg-linear-to-t to-transparent p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <h6 className="text-muted-foreground mt-4 text-end font-semibold capitalize">
          {category}
        </h6>
        <p className="text-muted-foreground my-1.5 line-clamp-2 text-sm leading-loose">
          {description}
        </p>
        <div className="mt-4 flex items-end justify-between">
          <CartActionButton product={product} className="static" />
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
    </div>
  );
}
