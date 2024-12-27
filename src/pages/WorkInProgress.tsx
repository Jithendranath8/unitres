import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WorkInProgress = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center">
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 flex items-center text-blue-600 hover:text-blue-800"
      >
        <ChevronLeft size={20} className="mr-1" />
        Back to Dashboard
      </button>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Work in Progress</h2>
      <p className="text-gray-600">This feature is currently under development.</p>
    </div>
  );
};

export default WorkInProgress;