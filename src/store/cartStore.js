import {create} from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => {
    const updatedCart = [...state.cart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Lưu vào localStorage
    return { cart: updatedCart };
  }),
  loadCart: () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    set({ cart });
  },
 
}));

export default useCartStore;