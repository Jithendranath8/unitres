import { create } from 'zustand';

const initialProducts = [
  { id: 1, name: 'Laptop', price: 999, stock: 50, category: 'Electronics' },
  { id: 2, name: 'Smartphone', price: 699, stock: 100, category: 'Electronics' },
  { id: 3, name: 'Headphones', price: 199, stock: 200, category: 'Accessories' },
];

export const useProductStore = create((set) => ({
  products: initialProducts,
  updateProduct: (id, updates) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, ...updates } : product
      ),
    })),
  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
}));