import React from "react";

const Navbar = ({ usercode }) => {
  return (
    <nav
      className="navbar navbar-light bg-dark shadow-sm"
      style={{ padding: "10px 20px" }}
    >
      <div className="container-fluid d-flex align-items-center">
        {/* Brand Name */}
        <span
          role="button"
          className="navbar-brand fs-4 fw-bold"
          style={{
            color: "rgb(74, 191, 156)",
            fontFamily: "'Lexend Giga', sans-serif",
          }}
        >
          CopyPal
        </span>

        <div className="d-flex flex-grow-1 justify-content-center ">
          <form className="d-none d-sm-block d-flex align-items-center" style={{ maxWidth: "400px", width: "100%" }}>
            <input
              className="form-control shadow-sm"
              type="search"
              placeholder="Search"
              style={{ borderRadius: "20px", width: "100%" }}
            />
          </form>
        </div>

        <div className="ms-3 mt-2 mt-lg-0 d-none d-md-block">
          <span
            className="fw-bold text-dark"
            style={{ fontFamily: "'Lexend Giga', sans-serif" }}
          >
            <span className="text-secondary">Usercode: </span>
            {usercode}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
