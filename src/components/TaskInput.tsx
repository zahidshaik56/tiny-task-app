
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus } from 'lucide-react';

interface TaskInputProps {
  onAddTask: (title: string, priority: 'low' | 'medium' | 'high') => void;
}

const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title.trim(), priority);
      setTitle('');
      setPriority('medium');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
      <div className="flex-1">
        <Input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="h-10 sm:h-12 text-sm sm:text-base border-2 border-gray-200 focus:border-blue-500 transition-colors"
        />
      </div>
      <div className="flex gap-3">
        <Select value={priority} onValueChange={(value: 'low' | 'medium' | 'high') => setPriority(value)}>
          <SelectTrigger className="w-full sm:w-32 h-10 sm:h-12 border-2 border-gray-200">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                Low
              </span>
            </SelectItem>
            <SelectItem value="medium">
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                Medium
              </span>
            </SelectItem>
            <SelectItem value="high">
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                High
              </span>
            </SelectItem>
          </SelectContent>
        </Select>
        <Button 
          type="submit" 
          className="h-10 sm:h-12 px-4 sm:px-6 bg-blue-500 hover:bg-blue-600 transition-colors flex-shrink-0"
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline ml-2">Add</span>
        </Button>
      </div>
    </form>
  );
};

export default TaskInput;
