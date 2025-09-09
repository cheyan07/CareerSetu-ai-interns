import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Home, Briefcase, Phone, User, MessageCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  showNavigation?: boolean;
  showFloatingChat?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showNavigation = true, 
  showFloatingChat = false 
}) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/internships', label: 'Internships', icon: Briefcase },
    { path: '/helpline', label: 'Helpline', icon: Phone },
    { path: '/profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-background">
      {showNavigation && (
        <nav className="w-full bg-slate-800 backdrop-blur-sm border-b border-border sticky top-0 z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Navigation Links */}
              <div className="flex items-center space-x-1 sm:space-x-4">
                {navItems.map(({ path, label, icon: Icon }) => (
                  <Button
                    key={path}
                    variant={isActive(path) ? "default" : "ghost"}
                    size="sm"
                    className={`transition-smooth text-white ${
                      isActive(path) 
                        ? 'gradient-primary text-primary-foreground shadow-lg' 
                        : 'hover:bg-slate-700 text-white'
                    }`}
                    asChild
                  >
                    <Link to={path} className="flex items-center space-x-1 sm:space-x-2">
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{label}</span>
                    </Link>
                  </Button>
                ))}
              </div>

              {/* Right Side Controls */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                {/* Language Selector - Only on Home page */}
                {location.pathname === '/' && (
                  <Select defaultValue="en">
                    <SelectTrigger className="w-24 sm:w-32 h-9 bg-slate-700 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      <SelectItem value="en" className="text-white hover:bg-slate-700">English</SelectItem>
                      <SelectItem value="hi" className="text-white hover:bg-slate-700">Hindi</SelectItem>
                      <SelectItem value="mr" className="text-white hover:bg-slate-700">Marathi</SelectItem>
                    </SelectContent>
                  </Select>
                )}
                
                {/* Login Button */}
                <Button
                className="bg-primary text-white px-6 py-2 rounded-xl shadow hover:bg-primary/80 transition"
                asChild
              >
                <Link to="/login">Login</Link>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Floating Chatbot */}
      {showFloatingChat && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            size="lg"
            className="rounded-full h-14 w-14 gradient-primary shadow-lg hover:scale-110 transition-bounce floating-icon"
          >
            <MessageCircle className="h-6 w-6 text-primary-foreground" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Layout;