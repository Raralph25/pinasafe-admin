import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., call an API or check credentials)
    navigate("/dashboard"); // Navigate to the dashboard page after login
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center w-300"
      style={{
        minHeight: "100vh", // Ensure full viewport height
        margin: "0", // Remove default margin
        marginLeft: "-255px", // Remove default padding
        backgroundImage: "url('src/assets/img/bg.jpg')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Ensures the background stays fixed while scrolling
      }}
    >
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h1>PinaSafe</h1>
          <p>Safety at your own risk</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-4">
            <div
              className="card shadow"
              style={{
                position: "relative",
                backgroundColor: "rgba(44, 151, 184, 0.6)", // Semi-transparent gray background
                borderRadius: "8px", // Optional: adds rounded corners to the container
                backdropFilter: "blur(20px)", // Apply blur effect to the background
                padding: "2rem", // Adds padding inside the container for spacing
              }}
            >
              <div className="card-body">
                <h3 className="text-center mb-4">Login</h3>

                <form onSubmit={handleLogin}>
                  {/* Username */}
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.6)", // Same gray background
                        borderColor: "#000", // Keep the black border
                        borderRadius: "8px", // Optional: to match the rounded card corners
                      }}
                    />
                  </div>

                  {/* Password */}
                  <div className="mb-3 position-relative">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.6)", // Same gray background
                        borderColor: "#000", // Keep the black border
                        borderRadius: "8px", // Optional: to match the rounded card corners
                      }}
                    />
                    <span
                      className="position-absolute top-50 end-0 translate-middle-y me-3"
                      style={{
                        cursor: "pointer",
                        transform: "translateY(-50%)", // Vertically center the icon
                        marginTop: "15px"
                      }}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </span>
                  </div>

                  {/* Remember Me Checkbox */}
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember Me
                    </label>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="btn btn-primary w-100 mb-3"
                    style={{
                      backgroundColor: "rgb(3, 153, 210)",
                    }}
                  >
                    Login
                  </button>
                </form>

                {/* Forgot Password Link */}
                <div className="text-center">
                  <a
                    href="/forgot-password"
                    className="text-decoration-none"
                    style={{
                      color: "black",
                    }}
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
