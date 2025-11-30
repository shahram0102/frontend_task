import { env } from "@/env";

export async function getProducts() {
  const res = await fetch(`${env.NEXT_PUBLIC_API_BASE_URL}/products`);

  const data = (await res.json()) as IResData<{ products: Array<IProduct> }>;
  return data.products;
}
