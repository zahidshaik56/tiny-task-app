
import React from 'react';
import { Button } from '@/components/ui/button';
import { Lightbulb, CheckCircle, User, LogIn } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 px-4 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
          <h1 className="text-lg sm:text-2xl font-bold text-gray-800 dark:text-white">Task Manager</h1>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white p-2 sm:p-3"
            aria-label="Toggle theme"
          >
            <Lightbulb className={`w-4 h-4 sm:w-5 sm:h-5 ${theme === 'dark' ? 'text-yellow-400' : 'text-gray-600'}`} />
          </Button>

          {/* Auth buttons - responsive */}
          <Button 
            variant="ghost" 
            size="sm"
            className="text-gray-600 dark:text-gray-300 hidden sm:flex"
          >
            <User className="w-4 h-4 mr-2" />
            Profile
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            className="text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 text-xs sm:text-sm px-2 sm:px-4"
          >
            <LogIn className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
