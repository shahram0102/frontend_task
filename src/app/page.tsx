import { getProducts } from "@/api/product";
import { getQueryClient } from "@/utils/get-query-client";
import Products from "./_components/Home/Products/Products";
import StickyCart from "./_components/Home/StickyCart/StickyCart";

export default async function HomePage() {
  const queryClient = getQueryClient();

  const products = await queryClient.fetchQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <main className="mx-auto h-full max-w-[500px] p-4">
      <Products products={products} />
      <StickyCart />
    </main>
  );
}
