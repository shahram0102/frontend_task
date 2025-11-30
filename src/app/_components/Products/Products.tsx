import Product from "./Product/Product";

export default function Products({ products }: { products: IProduct[] }) {
  return (
    <div className="flex w-full flex-col gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
