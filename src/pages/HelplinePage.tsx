import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  MapPin, 
  ExternalLink 
} from 'lucide-react';

const HelplinePage: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      value: "support@saarthi.in",
      description: "Get help via email within 24 hours",
      action: "mailto:support@saarthi.in"
    },
    {
      icon: Phone,
      title: "Phone Support",
      value: "+91-9999999999",
      description: "Call us for immediate assistance",
      action: "tel:+919999999999"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      value: "Available 24/7",
      description: "Chat with our support team instantly",
      action: "#"
    }
  ];

  const supportHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM IST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM IST" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <Layout showNavigation={true}>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get Help & Support
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Need assistance? Our support team is here to help you with any questions 
              or issues you might have with Saarthi.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                      <method.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-lg font-semibold text-primary mb-2">
                        {method.value}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {method.description}
                      </p>
                    </div>
                    <Button
                      className="w-full transition-smooth hover:bg-primary/90"
                      onClick={() => {
                        if (method.action.startsWith('mailto:') || method.action.startsWith('tel:')) {
                          window.location.href = method.action;
                        }
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Support Hours */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>Support Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {supportHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">How do I get started with Saarthi?</h3>
                  <p className="text-muted-foreground">
                    Simply complete your profile in the Profile Dashboard, and our AI will start 
                    recommending personalized internships based on your skills and interests.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Is Saarthi free to use?</h3>
                  <p className="text-muted-foreground">
                    Yes! Saarthi is completely free for students and job seekers. We believe 
                    in making quality internship opportunities accessible to everyone.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">How accurate are the AI recommendations?</h3>
                  <p className="text-muted-foreground">
                    Our AI analyzes your skills, interests, location, and experience to provide 
                    highly relevant internship matches. The more complete your profile, the better 
                    the recommendations.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Can I apply to multiple internships?</h3>
                  <p className="text-muted-foreground">
                    Absolutely! You can apply to as many internships as you'd like. We encourage 
                    you to explore different opportunities that match your career goals.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Office Location */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span>Our Office</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">Saarthi Technologies Pvt. Ltd.</p>
                  <p className="text-muted-foreground">
                    123 Innovation Hub, Tech Park<br />
                    Bangalore, Karnataka 560001<br />
                    India
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 text-destructive">Emergency Contact</h3>
              <p className="text-muted-foreground mb-4">
                For urgent technical issues or account problems, contact us immediately:
              </p>
              <Button variant="destructive" size="lg">
                <Phone className="h-5 w-5 mr-2" />
                Emergency Helpline: +91-8888888888
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HelplinePage;