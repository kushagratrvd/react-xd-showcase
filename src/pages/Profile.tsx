
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg">
        {/* Mobile App Container */}
        <div className="w-full h-[812px] bg-white rounded-lg overflow-hidden relative">
          {/* Content */}
          <div className="px-8 py-12">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-medium text-gray-600 mb-8">
                Account Settings
              </h1>
            </div>
            
            <div className="space-y-6">
              {/* Profile Section */}
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=100&h=100" 
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📷</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-gray-900">Marry Doe</h3>
                  <p className="text-gray-600 text-sm">Marry@Gmail.Com</p>
                </div>
              </div>
              
              {/* Description */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing 
                  Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut 
                  Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </p>
              </div>
              
              {/* Navigation buttons for demo */}
              <div className="pt-8 space-y-3">
                <Button 
                  onClick={() => navigate('/')}
                  variant="outline"
                  className="w-full h-12 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Back to Home
                </Button>
                <Button 
                  onClick={() => navigate('/login')}
                  variant="outline"
                  className="w-full h-12 border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
