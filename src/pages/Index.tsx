
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg">
        {/* Mobile App Container */}
        <div className="w-full h-[812px] bg-white rounded-lg overflow-hidden relative">
          {/* Content centered in mobile frame */}
          <div className="flex flex-col items-center justify-center h-full px-8">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-medium text-gray-900 mb-4">
                Welcome to PopX
              </h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit.
              </p>
            </div>
            
            <div className="w-full space-y-4">
              <Button 
                onClick={() => navigate('/signup')}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
              >
                Create Account
              </Button>
              
              <Button 
                onClick={() => navigate('/login')}
                variant="outline"
                className="w-full h-12 bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-200 font-medium rounded-lg"
              >
                Already Registered? Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
