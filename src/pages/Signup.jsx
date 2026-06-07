import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/profile");
  };

  return (
    <div className="container signup-container">
      <h1 className="title">
        Create your <br />
        PopX account
      </h1>

      <div className="input-box">
        <span>Full Name*</span>
        <input
          type="text"
          name="fullName"
          placeholder="John Smith"
          value={formData.fullName}
          onChange={handleChange}
        />
      </div>

      <div className="input-box">
        <span>Phone Number*</span>
        <input
          type="text"
          name="phone"
          placeholder="9876543210"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="input-box">
        <span>Email Address*</span>
        <input
          type="email"
          name="email"
          placeholder="marry@example.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="input-box">
        <span>Password*</span>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className="input-box">
        <span>Company Name</span>
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
        />
      </div>
      <div className="agency-section">
        <p>Are you an Agency?*</p>

        <div className="radio-options">
          <label>
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={formData.agency === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="agency"
              value="no"
              checked={formData.agency === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      <button className="signup-btn" onClick={handleSignup}>
        Create Account
      </button>
    </div>
  );
}

export default Signup;
