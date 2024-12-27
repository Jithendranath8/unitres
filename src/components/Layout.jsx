import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, LogOut, Home, Settings, Users, Package } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { logout, role } = useAuthStore();
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Package, label: 'Products', path: '/wip' },
    { icon: Users, label: 'Users', path: '/wip' },
    { icon: Settings, label: 'Settings', path: '/wip' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <Menu size={24} />
            </button>
            <h1 className="ml-4 text-xl font-semibold">Admin Dashboard</h1>
          </div>
          <button
            onClick={logout}
            className="flex items-center px-3 py-2 text-red-600 hover:bg-red-50 rounded-md"
          >
            <LogOut size={20} className="mr-2" />
            Logout
          </button>
        </div>
      </header>

      <div className="flex">
        <aside
          className={`${
            sidebarOpen ? 'w-64' : 'w-20'
          } bg-white shadow-sm transition-all duration-300 min-h-[calc(100vh-64px)]`}
        >
          <nav className="p-4">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="w-full flex items-center p-3 mb-2 rounded-md hover:bg-gray-100"
              >
                <item.icon size={20} />
                {sidebarOpen && <span className="ml-3">{item.label}</span>}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-6">{children}</main>
      </div>

      <footer className="bg-white shadow-sm mt-auto py-4 px-6 text-center">
        <p className="text-gray-600">© 2024 Admin Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;