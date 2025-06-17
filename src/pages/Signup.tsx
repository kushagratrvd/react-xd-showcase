
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: true
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Simple validation for demo
    if (formData.fullName && formData.email && formData.password) {
      navigate('/profile');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg">
        {/* Mobile App Container */}
        <div className="w-full h-[812px] bg-white rounded-lg overflow-hidden relative">
          {/* Content with scroll */}
          <div className="h-full overflow-y-auto px-8 py-12">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-medium text-gray-900 mb-2">
                Create your
              </h1>
              <h1 className="text-2xl font-medium text-gray-900 mb-6">
                PopX account
              </h1>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label className="text-blue-600 text-sm font-medium">
                  Full Name*
                </Label>
                <Input
                  placeholder="Marry Doe"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="mt-1 h-12 border-gray-200 rounded-lg"
                />
              </div>
              
              <div>
                <Label className="text-blue-600 text-sm font-medium">
                  Phone number*
                </Label>
                <Input
                  placeholder="Marry Doe"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="mt-1 h-12 border-gray-200 rounded-lg"
                />
              </div>
              
              <div>
                <Label className="text-blue-600 text-sm font-medium">
                  Email address*
                </Label>
                <Input
                  type="email"
                  placeholder="Marry Doe"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1 h-12 border-gray-200 rounded-lg"
                />
              </div>
              
              <div>
                <Label className="text-blue-600 text-sm font-medium">
                  Password *
                </Label>
                <Input
                  type="password"
                  placeholder="Marry Doe"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="mt-1 h-12 border-gray-200 rounded-lg"
                />
              </div>
              
              <div>
                <Label className="text-pink-500 text-sm font-medium">
                  Company name
                </Label>
                <Input
                  placeholder="Marry Doe"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="mt-1 h-12 border-gray-200 rounded-lg"
                />
              </div>
              
              <div className="pt-4">
                <p className="text-gray-700 text-sm font-medium mb-3">
                  Are you an Agency?*
                </p>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="agency" 
                      checked={formData.isAgency}
                      onChange={() => setFormData(prev => ({ ...prev, isAgency: true }))}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="agency" 
                      checked={!formData.isAgency}
                      onChange={() => setFormData(prev => ({ ...prev, isAgency: false }))}
                      className="w-4 h-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">No</span>
                  </label>
                </div>
              </div>
              
              <Button 
                onClick={handleSubmit}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg mt-8"
              >
                Create Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
