
import React from 'react';
import { CheckCircle, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and description */}
          <div className="flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-blue-500" />
            <div>
              <p className="text-sm font-medium text-gray-800 dark:text-white">Task Manager</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">Stay organized and productive</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>© 2024 Task Manager</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
