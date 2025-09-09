import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Building, 
  ChevronLeft, 
  ChevronRight,
  ExternalLink 
} from 'lucide-react';

interface Internship {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  description: string;
  skills: string[];
  stipend: string;
}

const mockInternships: Internship[] = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp Solutions",
    location: "Mumbai, Maharashtra",
    duration: "3 months",
    type: "Remote",
    description: "Work on building responsive web applications using React and TypeScript. Learn modern development practices and collaborate with senior developers.",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    stipend: "₹15,000/month"
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataFlow Systems",
    location: "Bangalore, Karnataka",
    duration: "4 months",
    type: "Hybrid",
    description: "Build scalable backend systems using Node.js and database management. Gain experience in API development and cloud deployment.",
    skills: ["Node.js", "MongoDB", "AWS"],
    stipend: "₹18,000/month"
  },
  {
    id: 3,
    title: "AI/ML Engineer",
    company: "InnovateTech",
    location: "Pune, Maharashtra",
    duration: "6 months",
    type: "On-site",
    description: "Work on machine learning models and AI applications. Experience with data preprocessing, model training, and deployment.",
    skills: ["Python", "TensorFlow", "Pandas"],
    stipend: "₹25,000/month"
  },
  {
    id: 4,
    title: "Mobile App Developer",
    company: "AppVentures",
    location: "Delhi, India",
    duration: "3 months",
    type: "Remote",
    description: "Develop cross-platform mobile applications using React Native. Work on user-friendly interfaces and app optimization.",
    skills: ["React Native", "JavaScript", "Firebase"],
    stipend: "₹12,000/month"
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudTech Solutions",
    location: "Hyderabad, Telangana",
    duration: "4 months",
    type: "Hybrid",
    description: "Learn about deployment pipelines, containerization, and cloud infrastructure management.",
    skills: ["Docker", "Kubernetes", "Jenkins"],
    stipend: "₹20,000/month"
  }
];

const InternshipViewer: React.FC = () => {
  const { toast } = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const currentInternship = mockInternships[currentIndex];

  const nextInternship = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % mockInternships.length);
  };

  const prevInternship = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + mockInternships.length) % mockInternships.length);
  };

  const handleApply = () => {
    toast({
      title: "Application Submitted!",
      description: `Your application for ${currentInternship.title} at ${currentInternship.company} has been submitted.`,
    });
  };

  return (
    <Layout showNavigation={true}>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Internship Opportunities
            </h1>
            <p className="text-muted-foreground text-lg">
              Switch through personalized internship recommendations
            </p>
          </div>

          {/* Main Internship Card */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              
              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-10 rounded-full bg-card/90 backdrop-blur-sm hover:bg-card transition-smooth shadow-lg"
                onClick={prevInternship}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-10 rounded-full bg-card/90 backdrop-blur-sm hover:bg-card transition-smooth shadow-lg"
                onClick={nextInternship}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Internship Card */}
              <Card className={`card-hover transition-smooth transform ${
                direction === 'right' ? 'animate-fade-in' : 'animate-fade-in'
              }`}>
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                    <CardTitle className="text-2xl font-bold text-foreground flex items-center space-x-2">
                      <Briefcase className="h-6 w-6 text-primary" />
                      <span>{currentInternship.title}</span>
                    </CardTitle>
                    <Badge className="gradient-primary text-primary-foreground">
                      {currentInternship.type}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Company Info */}
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Building className="h-5 w-5" />
                    <span className="text-lg font-medium">{currentInternship.company}</span>
                  </div>

                  {/* Location and Duration */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{currentInternship.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{currentInternship.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {currentInternship.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentInternship.skills.map((skill, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary"
                          className="px-3 py-1 bg-primary/10 text-primary border-primary/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Stipend */}
                  <div className="bg-success/10 rounded-lg p-4 border border-success/20">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Stipend</span>
                      <span className="text-xl font-bold text-success">
                        {currentInternship.stipend}
                      </span>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <Button
                    size="lg"
                    onClick={handleApply}
                    className="w-full gradient-primary text-lg py-4 rounded-xl shadow-lg hover:scale-105 transition-bounce"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {mockInternships.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            {/* Card Counter */}
            <div className="text-center mt-4">
              <span className="text-muted-foreground">
                {currentIndex + 1} of {mockInternships.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default InternshipViewer;