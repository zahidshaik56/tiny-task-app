
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
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      case 'low': return 'border-green-500 bg-green-50';
      default: return 'border-gray-200 bg-white';
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
    <div className={`group flex items-center gap-4 p-4 rounded-lg border-l-4 ${getPriorityColor(task.priority)} ${task.completed ? 'opacity-60' : ''} transition-all duration-200 hover:shadow-md`}>
      <Checkbox
        checked={task.completed}
        onCheckedChange={() => onToggleComplete(task.id)}
        className="w-5 h-5"
      />
      
      <div className="flex-1 flex items-center gap-3">
        <div className={`w-3 h-3 rounded-full ${getPriorityDot(task.priority)}`}></div>
        <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'} transition-all duration-200`}>
          {task.title}
        </span>
      </div>

      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <span className="text-sm text-gray-500 capitalize">{task.priority}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDeleteTask(task.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;
