
import React, { useState, useEffect } from 'react';
import { Task, FilterType } from '@/types/task';
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';
import { CheckCircle } from 'lucide-react';

const TaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks).map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt)
        }));
        setTasks(parsedTasks);
      } catch (error) {
        console.error('Error loading tasks from localStorage:', error);
      }
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string, priority: 'low' | 'medium' | 'high') => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
      priority,
      createdAt: new Date(),
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const toggleComplete = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'active': return !task.completed;
      case 'completed': return task.completed;
      default: return true;
    }
  });

  const taskCounts = {
    all: tasks.length,
    active: tasks.filter(task => !task.completed).length,
    completed: tasks.filter(task => task.completed).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle className="w-8 h-8 text-blue-500" />
            <h1 className="text-4xl font-bold text-gray-800">Task Manager</h1>
          </div>
          <p className="text-gray-600 text-lg">Stay organized and get things done</p>
        </div>

        {/* Main Container */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <TaskInput onAddTask={addTask} />
          
          <TaskFilter
            currentFilter={filter}
            onFilterChange={setFilter}
            taskCounts={taskCounts}
          />

          {/* Task List */}
          <div className="space-y-3">
            {filteredTasks.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  {filter === 'completed' ? 'No completed tasks yet' :
                   filter === 'active' ? 'No active tasks' : 'No tasks yet'}
                </h3>
                <p className="text-gray-500">
                  {filter === 'all' ? 'Add a task above to get started' : 
                   `Switch to "All Tasks" to see your ${filter === 'completed' ? 'active' : 'completed'} tasks`}
                </p>
              </div>
            ) : (
              filteredTasks.map((task, index) => (
                <div
                  key={task.id}
                  className="animate-in slide-in-from-top duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <TaskItem
                    task={task}
                    onToggleComplete={toggleComplete}
                    onDeleteTask={deleteTask}
                  />
                </div>
              ))
            )}
          </div>

          {/* Stats Footer */}
          {tasks.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>
                  {taskCounts.completed} of {taskCounts.all} tasks completed
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500"
                      style={{
                        width: `${taskCounts.all > 0 ? (taskCounts.completed / taskCounts.all) * 100 : 0}%`
                      }}
                    ></div>
                  </div>
                  <span className="font-medium">
                    {taskCounts.all > 0 ? Math.round((taskCounts.completed / taskCounts.all) * 100) : 0}%
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
