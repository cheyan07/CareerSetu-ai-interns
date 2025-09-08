import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-muted/10 to-primary/5">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-2">
          <h1 className="text-6xl sm:text-8xl font-bold gradient-primary bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg">
            Oops! The page you're looking for doesn't exist.
          </p>
        </div>
        
        <div className="space-y-4">
          <Button 
            size="lg" 
            className="gradient-primary px-8 py-3 rounded-xl hover:scale-105 transition-bounce"
            asChild
          >
            <Link to="/">Return to Home</Link>
          </Button>
          
          <div className="text-sm text-muted-foreground">
            Need help? <Link to="/helpline" className="text-primary hover:underline">Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
