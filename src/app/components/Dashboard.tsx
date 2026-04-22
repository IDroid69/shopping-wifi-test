import { Home, Search, PlusSquare, Heart, User } from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

export function Dashboard({ onLogout }: DashboardProps) {
  return (
    <div className="size-full" style={{ backgroundColor: '#fafafa' }}></div>
  );
}
