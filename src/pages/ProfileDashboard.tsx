import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  MapPin, 
  Award, 
  FileText, 
  Heart, 
  Lightbulb,
  Upload,
  Camera 
} from 'lucide-react';

const ProfileDashboard: React.FC = () => {
  const { toast } = useToast();
  const [profileData, setProfileData] = useState({
    skills: '',
    location: '',
    interests: '',
    projects: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    toast({
      title: "Profile Saved!",
      description: "Your profile has been updated successfully.",
    });
  };

  const handleFileUpload = (type: 'certificate' | 'resume' | 'photo') => {
    toast({
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Upload`,
      description: `${type.charAt(0).toUpperCase() + type.slice(1)} upload functionality will be implemented.`,
    });
  };

  const [locations, setLocations] = useState<string[]>([""]);

const handleLocationChange = (index: number, value: string) => {
  const updated = [...locations];
  updated[index] = value;
  setLocations(updated);
};

const addLocation = () => {
  if (locations.length < 4) setLocations([...locations, ""]);
};

const removeLocation = (index: number) => {
  setLocations(locations.filter((_, i) => i !== index));
};

  return (
    <Layout showNavigation={true}>
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Profile Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">
              Complete your profile to get personalized internship recommendations
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Profile Photo Section */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-primary" />
                  <span>Profile Photo</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center">
                    <User className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 rounded-full h-10 w-10 gradient-primary"
                    onClick={() => handleFileUpload('photo')}
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => handleFileUpload('photo')}
                  className="transition-smooth hover:bg-primary/5"
                >
                  <Upload className="h-4 w-4 mr-2" />
                  Upload New Photo
                </Button>
              </CardContent>
            </Card>

            {/* Skills Section */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <span>Skills</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Label htmlFor="skills">Add your skills here...</Label>
                <Textarea
                  id="skills"
                  placeholder="e.g., JavaScript, React, Python, Machine Learning, UI/UX Design..."
                  value={profileData.skills}
                  onChange={(e) => handleInputChange('skills', e.target.value)}
                  className="mt-2 min-h-[120px] transition-smooth focus:ring-primary/20"
                />
              </CardContent>
            </Card>

            {/* Location Section */}
            <Card className="card-hover">
  <CardHeader>
    <CardTitle className="flex items-center space-x-2">
      <MapPin className="h-5 w-5 text-primary" />
      <span>Location</span>
    </CardTitle>
  </CardHeader>
  <CardContent>
    <Label htmlFor="location">Add up to 3 locations</Label>
    <div className="space-y-3 mt-2">
      {locations.map((loc, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <Input
            type="text"
            placeholder={`Location ${idx + 1}`}
            value={loc}
            onChange={e => handleLocationChange(idx, e.target.value)}
            className="pl-3 transition-smooth focus:ring-primary/20"
          />
          {locations.length > 1 && (
            <Button variant="outline" size="sm" onClick={() => removeLocation(idx)}>
              Remove
            </Button>
          )}
        </div>
      ))}
      {locations.length < 3 && (
        <Button size="sm" onClick={addLocation}>
          Add Location
        </Button>
      )}
    </div>
  </CardContent>
</Card>

            {/* File Upload Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Certificates Upload */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Certificates</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-smooth"
                    onClick={() => handleFileUpload('certificate')}
                  >
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Drag and drop or click to upload certificates
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Resume Upload */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Resume</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center cursor-pointer hover:border-primary/50 transition-smooth"
                    onClick={() => handleFileUpload('resume')}
                  >
                    <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Upload your resume (PDF preferred)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Interests Section */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span>Interests</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Label htmlFor="interests">Your interests and passions</Label>
                <Textarea
                  id="interests"
                  placeholder="e.g., AI/ML, Web Development, Mobile Apps, Data Science, Blockchain..."
                  value={profileData.interests}
                  onChange={(e) => handleInputChange('interests', e.target.value)}
                  className="mt-2 min-h-[100px] transition-smooth focus:ring-primary/20"
                />
              </CardContent>
            </Card>

            {/* Projects Section */}
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <span>Experiments & Projects</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Label htmlFor="projects">Describe your projects and experiments</Label>
                <Textarea
                  id="projects"
                  placeholder="Tell us about your personal projects, hackathons, experiments, or any work you've done..."
                  value={profileData.projects}
                  onChange={(e) => handleInputChange('projects', e.target.value)}
                  className="mt-2 min-h-[150px] transition-smooth focus:ring-primary/20"
                />
              </CardContent>
            </Card>

            {/* Save Button */}
            <div className="sticky bottom-6 z-10 flex justify-center">
              <Button
                size="lg"
                onClick={handleSaveProfile}
                className="gradient-primary px-12 py-4 text-lg rounded-xl shadow-xl hover:scale-105 transition-bounce"
              >
                Save Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileDashboard;