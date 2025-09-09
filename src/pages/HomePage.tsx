import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Play, ExternalLink } from 'lucide-react';
import Layout from '@/components/Layout';
import saarthiLogo from '@/assets/saarthi-logo.jpg';

const HomePage: React.FC = () => {
  return (
    <Layout showNavigation={true} showFloatingChat={true}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/10">
        {/* Orange Rectangle Background */}
        <div className="absolute inset-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
            <div className="w-full max-w-7xl h-4/5 bg-primary/30 rounded-2xl shadow-2xl"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-4rem)] gap-12 lg:gap-20 px-8 lg:pl-16">
            
            {/* Content Section - Left Side */}
            <div className="flex-1 text-left space-y-6 max-w-2xl">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="gradient-primary bg-clip-text text-transparent">Saarthi</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-foreground">
                  Your AI Internship Assistant
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground glow-text leading-relaxed">
                Find the right internship with AI-powered personalized recommendations
              </p>
            </div>

            {/* Logo Section - Right Side */}
            <div className="relative flex-shrink-0">
              <img 
                src="/lovable-uploads/80b5a3dd-c3cb-464f-93a6-81bd16bab2f1.png" 
                alt="Saarthi Logo" 
                className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-3xl shadow-2xl card-hover object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl"></div>
            </div>

            {/* CTA Buttons - Full Width Below */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-primary text-white text-lg px-8 py-4 rounded-xl shadow-xl hover:scale-105 hover:bg-primary/80 transition-bounce"
                asChild
              >
                <Link to="/profile" className="flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Get Started</span>
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 rounded-xl border-2 hover:bg-primary/5 transition-smooth"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-border mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Contact Us</h3>
              <div className="space-y-2">
                <p className="text-white">
                  📧 Email: <span className="text-primary">support@saarthi.in</span>
                </p>
                <p className="text-muted-foreground">
                  📞 Helpline: <span className="text-primary">+91-9999999999</span>
                </p>
              </div>
            </div>

            {/* App Download */}
            <div className="flex flex-col items-start md:items-end space-y-4">
              <h3 className="text-xl font-semibold text-white">Get the App</h3>
              <Button
              className="flex items-center space-x-2 bg-primary text-white hover:bg-primary/80 transition-smooth rounded-xl px-6 py-3 shadow"
              >
              <Play className="h-5 w-5 text-green-400" />
              <span>Download on Play Store</span>
              <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2025 Saarthi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default HomePage;