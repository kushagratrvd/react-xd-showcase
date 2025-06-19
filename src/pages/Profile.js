
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
                  src={`${process.env.PUBLIC_URL}/profile-image.webp`}
                  alt="Profile"
                  className="profile-img"
                  onError={(e) => {
                    console.log("WebP failed, trying PNG...")
                    e.target.src = `${process.env.PUBLIC_URL}/profile-image.png`
                    e.target.onerror = () => {
                      console.log("PNG failed, using fallback...")
                      e.target.src = "https://via.placeholder.com/76x76/E5E5E5/999999?text=Profile"
                    }
                  }}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/purple-icon.webp`}
                  alt="Camera"
                  className="profile-icon"
                  onError={(e) => {
                    console.log("Icon WebP failed, trying PNG...")
                    e.target.src = `${process.env.PUBLIC_URL}/purple-icon.png`
                    e.target.onerror = () => {
                      console.log("Icon PNG failed, using fallback...")
                      e.target.src = "https://via.placeholder.com/20x20/6C25FF/FFFFFF?text=📷"
                    }
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
  )
}

export default Profile
