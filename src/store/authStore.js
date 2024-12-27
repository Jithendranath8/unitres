import { create } from 'zustand';

const adminEmails = ['admin@example.com'];
const managerEmails = ['manager@example.com'];

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  role: null,
  email: null,
  login: (email) => {
    const role = adminEmails.includes(email)
      ? 'admin'
      : managerEmails.includes(email)
      ? 'manager'
      : 'user';
    set({ isAuthenticated: true, role, email });
  },
  logout: () => set({ isAuthenticated: false, role: null, email: null }),
}));