
export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}

export type FilterType = 'all' | 'active' | 'completed';
