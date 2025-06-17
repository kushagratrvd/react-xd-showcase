
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg">
        {/* Mobile App Container */}
        <div className="w-full h-[812px] bg-white rounded-lg overflow-hidden relative">
          {/* Content centered in mobile frame */}
          <div className="flex flex-col justify-center h-full px-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-medium text-gray-900 mb-2">
                Signin to your
              </h1>
              <h1 className="text-2xl font-medium text-gray-900 mb-4">
                PopX account
              </h1>
              <p className="text-blue-600 text-sm border border-blue-600 px-3 py-1 rounded inline-block">
                Lorem ipsum dolor sit amet,
              </p>
              <p className="text-blue-600 text-sm border border-blue-600 px-3 py-1 rounded inline-block mt-1">
                consectetur adipiscing elit.
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-blue-600 text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 h-12 border-gray-200 rounded-lg"
                />
              </div>
              
              <div>
                <Label htmlFor="password" className="text-blue-600 text-sm font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 h-12 border-gray-200 rounded-lg"
                />
              </div>
              
              <Button 
                onClick={handleLogin}
                className="w-full h-12 bg-blue-300 hover:bg-blue-400 text-white font-medium rounded-lg mt-8"
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
