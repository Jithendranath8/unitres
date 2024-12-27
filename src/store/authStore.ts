import { create } from 'zustand';

type Role = 'admin' | 'manager' | 'user';

interface AuthState {
  isAuthenticated: boolean;
  role: Role | null;
  email: string | null;
  login: (email: string) => void;
  logout: () => void;
}

const adminEmails = ['admin@example.com'];
const managerEmails = ['manager@example.com'];

export const useAuthStore = create<AuthState>((set) => ({
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