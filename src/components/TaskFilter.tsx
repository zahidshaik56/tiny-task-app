
import React from 'react';
import { Button } from '@/components/ui/button';
import { FilterType } from '@/types/task';

interface TaskFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  taskCounts: {
    all: number;
    active: number;
    completed: number;
  };
}

const TaskFilter = ({ currentFilter, onFilterChange, taskCounts }: TaskFilterProps) => {
  const filters: { key: FilterType; label: string; count: number }[] = [
    { key: 'all', label: 'All Tasks', count: taskCounts.all },
    { key: 'active', label: 'Active', count: taskCounts.active },
    { key: 'completed', label: 'Completed', count: taskCounts.completed },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-6 p-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
      {filters.map((filter) => (
        <Button
          key={filter.key}
          variant={currentFilter === filter.key ? 'default' : 'ghost'}
          onClick={() => onFilterChange(filter.key)}
          className={`flex-1 transition-all duration-200 text-xs sm:text-sm px-2 sm:px-4 py-2 ${
            currentFilter === filter.key
              ? 'bg-blue-500 text-white shadow-md'
              : 'text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:bg-white dark:hover:bg-gray-600'
          }`}
        >
          <span className="truncate">{filter.label}</span>
          <span className={`ml-1 sm:ml-2 px-1.5 sm:px-2 py-0.5 rounded-full text-xs ${
            currentFilter === filter.key
              ? 'bg-blue-400 text-white'
              : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
          }`}>
            {filter.count}
          </span>
        </Button>
      ))}
    </div>
  );
};

export default TaskFilter;
