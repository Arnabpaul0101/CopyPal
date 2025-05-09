import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  const [usercode, setUsercode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleInputChange = (e) => {
    setUsercode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!usercode.trim()) {
      setError("Please enter your code.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5050/api/login", {
        usercode,
      });
      const id = res.data.user._id;
      navigate(`/displayNotes/${id}`);
    } catch (err) {
      setError("Invalid code. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center bg-secondary-subtle" style={{ minHeight: "100vh" }}>
      <div className="row w-100 m-2 m-md-5 bg-dark rounded-4 shadow overflow-hidden">
        
        {/* Left section */}
        <div className="col-md-6 d-flex flex-column justify-content-center p-4 text-light">
          <h1 className="fw-bold mb-4" style={{ color: "rgb(80, 207, 169)", fontFamily: "'Lexend Giga', sans-serif" }}>
            CopyPal
          </h1>
          <p className="fs-5 lh-lg">
            A sleek and minimalistic online notepad for seamless text editing and sharing.
            Access your notes from anywhere and collaborate effortlessly — no sign-ups needed.
          </p>
        </div>

        {/* Right section */}
        <div className="col-md-6 bg-light d-flex flex-column justify-content-center p-5">
          <form onSubmit={handleSubmit} className="w-100">
            <h4 className="fw-semibold mb-4 text-center">Access Your Notes</h4>

            <div className="mb-3">
              <input
                ref={inputRef}
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter your code"
                value={usercode}
                onChange={handleInputChange}
              />
            </div>

            {error && <div className="text-danger text-center mb-3">{error}</div>}

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-lg text-light w-100"
                style={{ backgroundColor: "rgb(80, 207, 169)" }}
                disabled={loading}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;
