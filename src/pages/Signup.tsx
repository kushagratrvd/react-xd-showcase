
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
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#F7F8F9' }}>
      <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg">
        {/* Mobile App Container */}
        <div className="w-full h-[812px] bg-white rounded-lg overflow-hidden relative">
          {/* Content with scroll */}
          <div className="h-full overflow-y-auto px-8 py-12">
            <div className="text-left mb-8">
              <h1 style={{
                fontFamily: 'Rubik',
                fontWeight: 500,
                fontSize: '28px',
                color: '#1D2226',
                lineHeight: '36px',
                marginBottom: '24px'
              }}>
                Create your<br />
                PopX account
              </h1>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label style={{
                  fontFamily: 'Rubik',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: '#6C25FF',
                  lineHeight: '17px'
                }}>
                  Full Name<span style={{ color: '#DD4A3D' }}>*</span>
                </Label>
                <Input
                  placeholder="Marry Doe"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="mt-1 h-12 rounded-lg"
                  style={{ 
                    borderColor: '#CBCBCB',
                    fontFamily: 'Rubik',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#1D2226'
                  }}
                />
              </div>
              
              <div>
                <Label style={{
                  fontFamily: 'Rubik',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: '#6C25FF',
                  lineHeight: '17px'
                }}>
                  Phone number<span style={{ color: '#DD4A3D' }}>*</span>
                </Label>
                <Input
                  placeholder="Marry Doe"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  className="mt-1 h-12 rounded-lg"
                  style={{ 
                    borderColor: '#CBCBCB',
                    fontFamily: 'Rubik',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#1D2226'
                  }}
                />
              </div>
              
              <div>
                <Label style={{
                  fontFamily: 'Rubik',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: '#6C25FF',
                  lineHeight: '17px'
                }}>
                  Email address<span style={{ color: '#DD4A3D' }}>*</span>
                </Label>
                <Input
                  type="email"
                  placeholder="Marry Doe"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-1 h-12 rounded-lg"
                  style={{ 
                    borderColor: '#CBCBCB',
                    fontFamily: 'Rubik',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#1D2226'
                  }}
                />
              </div>
              
              <div>
                <Label style={{
                  fontFamily: 'Rubik',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: '#6C25FF',
                  lineHeight: '17px'
                }}>
                  Password <span style={{ color: '#DD4A3D' }}>*</span>
                </Label>
                <Input
                  type="password"
                  placeholder="Marry Doe"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="mt-1 h-12 rounded-lg"
                  style={{ 
                    borderColor: '#CBCBCB',
                    fontFamily: 'Rubik',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#1D2226'
                  }}
                />
              </div>
              
              <div>
                <Label style={{
                  fontFamily: 'Rubik',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: '#6C25FF',
                  lineHeight: '17px'
                }}>
                  Company name
                </Label>
                <Input
                  placeholder="Marry Doe"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="mt-1 h-12 rounded-lg"
                  style={{ 
                    borderColor: '#CBCBCB',
                    fontFamily: 'Rubik',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#1D2226'
                  }}
                />
              </div>
              
              <div className="pt-4">
                <p style={{
                  fontFamily: 'Rubik',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: '#1D2226',
                  lineHeight: '17px',
                  marginBottom: '12px'
                }}>
                  Are you an Agency?<span style={{ color: '#DD4A3D' }}>*</span>
                </p>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="agency" 
                      checked={formData.isAgency}
                      onChange={() => setFormData(prev => ({ ...prev, isAgency: true }))}
                      className="w-4 h-4"
                      style={{ 
                        accentColor: '#642AF5',
                        borderColor: '#919191'
                      }}
                    />
                    <span className="ml-2" style={{
                      fontFamily: 'Rubik',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: '#1D2226',
                      lineHeight: '17px'
                    }}>Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input 
                      type="radio" 
                      name="agency" 
                      checked={!formData.isAgency}
                      onChange={() => setFormData(prev => ({ ...prev, isAgency: false }))}
                      className="w-4 h-4"
                      style={{ 
                        accentColor: '#642AF5',
                        borderColor: '#919191'
                      }}
                    />
                    <span className="ml-2" style={{
                      fontFamily: 'Rubik',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: '#1D2226',
                      lineHeight: '17px'
                    }}>No</span>
                  </label>
                </div>
              </div>
              
              <div className="pt-8">
                <Button 
                  onClick={handleSubmit}
                  className="w-full h-12 text-white font-medium rounded-lg border-0"
                  style={{
                    backgroundColor: '#6C25FF',
                    fontFamily: 'Rubik',
                    fontWeight: 500,
                    fontSize: '16px',
                    color: '#FFFFFF',
                    lineHeight: '17px'
                  }}
                >
                  Create Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
