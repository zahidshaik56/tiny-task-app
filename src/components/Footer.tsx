
import React from 'react';
import { CheckCircle, Heart, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 mt-auto">
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

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 p-2"
            >
              <a
                href="https://github.com/zahidshaikzahidshaik"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 p-2"
            >
              <a
                href="https://www.linkedin.com/in/shaikzahidhussain/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Zahid Hussain © 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
