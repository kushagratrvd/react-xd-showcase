
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simple validation for demo
    if (email && password) {
      navigate('/profile');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#F7F8F9' }}>
      <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg">
        {/* Mobile App Container */}
        <div className="w-full h-[812px] bg-white rounded-lg overflow-hidden relative">
          {/* Content centered in mobile frame */}
          <div className="flex flex-col justify-center h-full px-8">
            <div className="text-center mb-8">
              <h1 style={{
                fontFamily: 'Rubik',
                fontWeight: 500,
                fontSize: '28px',
                color: '#1D2226',
                lineHeight: '36px',
                marginBottom: '16px'
              }}>
                Signin to your<br />
                PopX account
              </h1>
              <div className="space-y-1">
                <p className="text-sm px-3 py-1 rounded inline-block" style={{
                  color: '#6C25FF',
                  border: '1px solid #6C25FF'
                }}>
                  Lorem ipsum dolor sit amet,
                </p>
                <br />
                <p className="text-sm px-3 py-1 rounded inline-block" style={{
                  color: '#6C25FF',
                  border: '1px solid #6C25FF'
                }}>
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="email" style={{
                  fontFamily: 'Rubik',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: '#6C25FF',
                  lineHeight: '17px'
                }}>
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 h-12 rounded-lg"
                  style={{ 
                    borderColor: '#CBCBCB',
                    fontFamily: 'Rubik',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#919191',
                    lineHeight: '17px'
                  }}
                />
              </div>
              
              <div>
                <Label htmlFor="password" style={{
                  fontFamily: 'Rubik',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: '#6C25FF',
                  lineHeight: '17px'
                }}>
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 h-12 rounded-lg"
                  style={{ 
                    borderColor: '#CBCBCB',
                    fontFamily: 'Rubik',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#919191',
                    lineHeight: '17px'
                  }}
                />
              </div>
              
              <Button 
                onClick={handleLogin}
                className="w-full h-12 text-white font-medium rounded-lg mt-8 border-0"
                style={{
                  backgroundColor: '#6C25FF',
                  fontFamily: 'Rubik',
                  fontWeight: 500,
                  fontSize: '16px',
                  color: '#FFFFFF',
                  lineHeight: '17px'
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
