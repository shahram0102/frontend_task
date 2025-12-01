import ProductCard from "./Product/ProductCard/ProductCard";
import SpecialProductCard from "./Product/SpecialProductCard/SpecialProductCard";

export default function Products({ products }: { products: IProduct[] }) {
  return (
    <div className="flex w-full flex-col gap-4">
      {products.map((product) => {
        if (product.images.length > 1)
          return <SpecialProductCard key={product.id} product={product} />;
        else return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
