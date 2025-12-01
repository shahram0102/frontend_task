import { type StateCreator } from "zustand";

type ICartItem = IProduct & {
  quantity: number;
};
type IState = {
  products: ICartItem[];
};

type IActions = {
  addOrIncrease: (product: IProduct) => void;
  decreaseOrDelete: (id: number) => void;
};

export type IProductSlice = IState & IActions;

const base: IState = {
  products: [],
};

const createProductSlice: StateCreator<IProductSlice> = (set, get) => ({
  ...base,
  addOrIncrease: (product) => {
    const { products } = get();

    const existingItem = products.find((p) => p.id === product.id);

    if (existingItem) {
      set({
        products: products.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p,
        ),
      });
    } else {
      set({
        products: [...products, { ...product, quantity: 1 }],
      });
    }
  },

  decreaseOrDelete: (id) => {
    const { products } = get();

    const existingItem = products.find((p) => p.id === id);
    if (!existingItem) return;

    if (existingItem.quantity > 1) {
      set({
        products: products.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p,
        ),
      });
    } else {
      set({
        products: products.filter((p) => p.id !== id),
      });
    }
  },
});

export default createProductSlice;
