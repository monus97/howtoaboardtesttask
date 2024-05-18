import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchValue.trim()) {
      navigate(`/search-course?s=${encodeURIComponent(searchValue)}`);
      setSearchValue("")
    }
  };
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/portal">Portal</Link>
        </li>
      </ul>
      <ul>
        <li>
          <div
            style={{
              borderRadius: "15px",
              paddingRight: "10px",
              paddingLeft: "10px",
              background: "#80808070",
            }}
          >
            <input
              style={{
                border: "none",
                outline: "none",
                color: "#fff",
                padding: "4px",
                background: "none",
              }}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search For"
            />
            <button
              onClick={handleSearch}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                marginLeft: "4px",
              }}
            >
              <i
                className="fa fa-search"
                style={{ fontSize: "13px", color: "#fff" }}
              ></i>
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
