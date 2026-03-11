import { create } from "zustand";
import { Product } from "@/data/products";


interface CartStore {
    cart: CartItem[];
    addToCart: (item: Product) => void;
    removeFromCart: (item: Product) => void;
    clearCart: () => void;
    increaseQuantity: (id: string) => void;
    decreaseQuantity: (id: string) => void;
}

export interface CartItem extends Product {
    quantity: number;
}

export const useCartStore = create<CartStore>((set) => ({
    cart: [],
    addToCart: (item: Product) =>
  set((state) => {
    const existing = state.cart.find((i) => i.id === item.id);

    if (existing) {
      return {
        cart: state.cart.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      };
    }

    return {
      cart: [...state.cart, { ...item, quantity: 1 }],
    };
  }),
    removeFromCart: (item) => set((state) => ({ cart: state.cart.filter((i) => i.id !== item.id) })),
    clearCart: () => set({ cart: [] }),
    increaseQuantity: (id) => set((state) => ({ cart: state.cart.map((i) => i.id === id ? { ...i, quantity: i.quantity + 1 } : i) })),
    decreaseQuantity: (id) => set((state) => ({ cart: state.cart.map((i) => i.id === id ? { ...i, quantity: i.quantity - 1 } : i).filter((i) => i.quantity > 0) })),
}));