
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#F7F8F9' }}>
      <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg">
        {/* Mobile App Container */}
        <div className="w-full h-[812px] bg-white rounded-lg overflow-hidden relative">
          {/* Content positioned at bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-16">
            <div className="text-left mb-12">
              <h1 className="text-3xl font-medium mb-4" style={{ 
                fontFamily: 'Rubik', 
                fontWeight: 500, 
                fontSize: '32px', 
                color: '#1D2226',
                lineHeight: '40px'
              }}>
                Welcome to PopX
              </h1>
              <p style={{ 
                fontFamily: 'Rubik', 
                fontWeight: 400, 
                fontSize: '14px', 
                color: '#1D2226',
                lineHeight: '18px'
              }}>
                Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit.
              </p>
            </div>
            
            <div className="w-full space-y-4">
              <Button 
                onClick={() => navigate('/signup')}
                className="w-full h-12 text-white font-medium rounded-lg border-0"
                style={{ 
                  backgroundColor: '#6C25FF',
                  fontFamily: 'Rubik',
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#FFFFFF'
                }}
              >
                Create Account
              </Button>
              
              <Button 
                onClick={() => navigate('/login')}
                variant="outline"
                className="w-full h-12 font-medium rounded-lg border-0"
                style={{ 
                  backgroundColor: '#6C25FF4B',
                  color: '#1D2226',
                  fontFamily: 'Rubik',
                  fontWeight: 500,
                  fontSize: '16px'
                }}
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
