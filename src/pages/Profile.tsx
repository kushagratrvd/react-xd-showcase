
const Profile = () => {
  return (
    <div className="page-container">
      <div className="mobile-container profile-container">
        {/* Account Settings Header */}
        <div className="profile-settings-header">
          <h1 className="account-settings-title">Account Settings</h1>
        </div>

        {/* Profile Content with dashed border */}
        <div className="profile-content-with-border">
          <div className="profile-section">
            {/* Profile Info Row */}
            <div className="profile-info-row">
              <div className="profile-image-container">
                <img
                  src="/lovable-uploads/5a50d590-cc20-46b3-b71b-4c2b59bd1f66.png"
                  alt="Profile"
                  className="profile-img"
                  onError={(e) => {
                    console.log("Profile image failed, using fallback...");
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/76x76/E5E5E5/999999?text=Profile";
                  }}
                />
                <img
                  src="/lovable-uploads/8e371d3c-ea89-4a37-b4d0-46dc96419ffe.png"
                  alt="Camera"
                  className="profile-icon"
                  onError={(e) => {
                    console.log("Icon failed, using fallback...");
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/20x20/6C25FF/FFFFFF?text=📷";
                  }}
                />
              </div>

              <div className="profile-text-info">
                <h2 className="profile-name">Mary Doe</h2>
                <p className="profile-email">Mary@Gmail.com</p>
              </div>
            </div>

            {/* Description */}
            <p className="profile-description">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore
              Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
