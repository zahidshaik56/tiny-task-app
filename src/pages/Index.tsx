
import React from 'react';
import TaskManager from '@/components/TaskManager';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      <main className="flex-1">
        <TaskManager />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
