
import React from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Trash2 } from 'lucide-react';
import { Task } from '@/types/task';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

const TaskItem = ({ task, onToggleComplete, onDeleteTask }: TaskItemProps) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-500 bg-red-50 dark:bg-red-900/20';
      case 'medium': return 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20';
      case 'low': return 'border-green-500 bg-green-50 dark:bg-green-900/20';
      default: return 'border-gray-200 bg-white dark:bg-gray-800';
    }
  };

  const getPriorityDot = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border-l-4 ${getPriorityColor(task.priority)} ${task.completed ? 'opacity-60' : ''} transition-all duration-200 hover:shadow-md`}>
      <Checkbox
        checked={task.completed}
        onCheckedChange={() => onToggleComplete(task.id)}
        className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
      />
      
      <div className="flex-1 flex items-center gap-2 sm:gap-3 min-w-0">
        <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${getPriorityDot(task.priority)} flex-shrink-0`}></div>
        <span className={`text-sm sm:text-lg truncate ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-800 dark:text-gray-200'} transition-all duration-200`}>
          {task.title}
        </span>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0">
        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 capitalize hidden sm:inline">{task.priority}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDeleteTask(task.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors p-1 sm:p-2"
        >
          <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
