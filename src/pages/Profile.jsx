function Profile() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="container">
      <div className="profile-header">
        <h3>Account Settings</h3>
      </div>

      <div className="profile-content">
        <div className="profile-card">
     <img
  src="https://randomuser.me/api/portraits/women/44.jpg"
  alt="Jane Smith"
  className="avatar"
/>

          <div>
            <h4>{user.fullName || "John Smith"}</h4>
            <p>{user.email || "johnsmith@gmail.com"}</p>
          </div>
        </div>

        <p className="profile-text">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam.
        </p>
      </div>
    </div>
  );
}

export default Profile;
