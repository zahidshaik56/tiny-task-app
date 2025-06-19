
import React from 'react';
import { Button } from '@/components/ui/button';
import { Lightbulb, CheckCircle, User, LogIn } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <CheckCircle className="w-8 h-8 text-blue-500" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Task Manager</h1>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
          >
            <Lightbulb className={`w-5 h-5 ${theme === 'dark' ? 'text-yellow-400' : 'text-gray-600'}`} />
          </Button>

          {/* Auth buttons - placeholder for now */}
          <Button variant="ghost" className="text-gray-600 dark:text-gray-300">
            <User className="w-4 h-4 mr-2" />
            Profile
          </Button>
          
          <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400">
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
