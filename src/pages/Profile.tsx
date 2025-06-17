
const Profile = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#F7F8F9' }}>
      <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg">
        {/* Mobile App Container */}
        <div className="w-full h-[812px] rounded-lg overflow-hidden relative" style={{ backgroundColor: '#FFFFFF' }}>
          {/* Content */}
          <div className="px-8 py-12">
            <div className="text-center mb-8">
              <h1 style={{
                fontFamily: 'Rubik',
                fontWeight: 400,
                fontSize: '18px',
                color: '#1D2226',
                lineHeight: '21px',
                textTransform: 'capitalize',
                marginBottom: '32px'
              }}>
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
                  <h3 style={{
                    fontFamily: 'Rubik',
                    fontWeight: 500,
                    fontSize: '15px',
                    color: '#1D2226',
                    lineHeight: '19px',
                    textTransform: 'capitalize'
                  }}>Marry Doe</h3>
                  <p style={{
                    fontFamily: 'Rubik',
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#1D2226',
                    lineHeight: '19px',
                    textTransform: 'capitalize'
                  }}>Marry@Gmail.Com</p>
                </div>
              </div>
              
              {/* Description */}
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#CBCBCB' }}>
                <p style={{
                  fontFamily: 'Rubik',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#1D2226',
                  lineHeight: '22px',
                  textTransform: 'capitalize'
                }}>
                  Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing 
                  Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut 
                  Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
