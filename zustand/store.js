import create from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create((set) => ({
	carts: [],
	addToCart: (item) => set(() => ({ carts: item })),
	removeAllCart: () => set({ carts: [] }),
}));

export default useCartStore;
