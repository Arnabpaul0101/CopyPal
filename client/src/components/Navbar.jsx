import React from "react";
import { Search, User, Settings, Sun, Moon } from "react-feather";

const Navbar = ({ usercode }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchQuery);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  React.useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <nav
      className="navbar navbar-light bg-dark shadow-sm"
      style={{ 
        padding: "10px 20px", 
        backdropFilter: "blur(10px)",
        transition: "background-color 0.3s ease"
      }}
    >
      <div className="container-fluid d-flex align-items-center">
        {/* Brand Name */}
        <span
          role="button"
          className="navbar-brand fs-4 fw-bold"
          style={{
            color: "rgb(74, 191, 156)",
            fontFamily: "'Lexend Giga', sans-serif",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          CopyPal
        </span>

        <div className="d-flex flex-grow-1 justify-content-center">
          <form 
            onSubmit={handleSearch}
            className="d-none d-sm-block d-flex align-items-center"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <div className="input-group">
              <span className="input-group-text bg-transparent border-0">
                <Search size={20} color="#fff" />
              </span>
              <input
                className="form-control bg-transparent border-0 text-light"
                type="search"
                placeholder="Search documents..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  borderRadius: "20px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  padding: "0.5rem 1rem"
                }}
              />
            </div>
          </form>
        </div>

        <div className="ms-3 d-flex align-items-center gap-3">
          <button 
            className="btn btn-link text-light p-0" 
            onClick={toggleDarkMode}
            title={isDarkMode ? "Light Mode" : "Dark Mode"}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="btn btn-link text-light p-0">
            <Settings size={20} />
          </button>
          <div className="dropdown">
            <button 
              className="btn btn-link text-light p-0" 
              type="button" 
              id="userDropdown" 
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <User size={20} />
            </button>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
              <li><p className="dropdown-item-text">User ID: {usercode || "Not logged in"}</p></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
