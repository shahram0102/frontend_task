export function getFinalPrice(product: IProduct) {
  return Number(
    (
      product.price -
      product.price * (product.discountPercentage / 100)
    ).toFixed(2),
  );
}
