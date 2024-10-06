import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  cart: [],
  addToCart: (product) => set((state) => {
    const updatedCart = [...state.cart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Lưu vào localStorage
    return { cart: updatedCart };
  }),
  getCart: () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const currentCart = get().cart;

    // Only update if storedCart is different from currentCart to prevent re-renders
    if (JSON.stringify(storedCart) !== JSON.stringify(currentCart)) {
      set({ cart: storedCart });
    }
  },
  removeFromCart: (productId) => set((state) => {
    const updatedCart = state.cart.filter((item) => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Cập nhật localStorage
    return { cart: updatedCart };
  }),
  clearCart: () => set(() => {
    localStorage.removeItem('cart'); 
    return { cart: [] }; 
  }),
}));

export default useCartStore;
