import React from 'react';
import { Info } from 'lucide-react';

const LoginInfo = () => {
  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={() => document.getElementById('login-info')?.showModal()}
        className="p-2 rounded-full hover:bg-gray-100"
      >
        <Info size={24} />
      </button>

      <dialog id="login-info" className="p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Login Information</h3>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Admin Email:</p>
            <p className="text-gray-600">admin@example.com</p>
          </div>
          <div>
            <p className="font-medium">Manager Email:</p>
            <p className="text-gray-600">manager@example.com</p>
          </div>
        </div>
        <button
          onClick={() => document.getElementById('login-info')?.close()}
          className="mt-6 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
        >
          Close
        </button>
      </dialog>
    </div>
  );
};

export default LoginInfo;