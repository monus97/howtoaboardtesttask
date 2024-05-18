import React, { useState } from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import Program from "../../../jsonData/jsonData";
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return text;
};
const Sidebar = ({ filters, searchedValue, handleSearch, onFilterChange }) => {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);
  const filteredPrograms = Program.filter((program) => {
    return program.name.toLowerCase().includes(searchedValue.toLowerCase());
  });
  return (
    <div className="sidebar">
      <div
        style={{
          borderBottom: "1px solid #00000029 ",
          textAlign: "start",
          padding: "1rem",
        }}
      >
        <div>
          <i
            class="fa fa-home"
            style={{ color: isHovered ? "blue" : "inherit", cursor: "pointer" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate("/")}
          >
            {" "}
            home /
          </i>{" "}
          Search Results for: {searchedValue}
        </div>
        <h3>Search Results for: {searchedValue}</h3>
        <div style={{ gap: "5%", display: "flex" }}>
          <input
            type="text"
            name="keyword"
            style={{
              paddingLeft: "10px",
              width: "60%",
              border: "1px solid #00000029",
              outline: "none",
            }}
            value={filters.keyword}
            onChange={onFilterChange}
          />
          <button
            style={{
              width: "38%",
              color: "#fff",
              border: "none",
              background: "#0288d1",
              padding: "8px",
              borderRadius:"5px",
              cursor:"pointer"
            }}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div
        className="programs crd"
        
      >
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className="program"
            style={{ width: "100% !important" }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <div
                style={{ width: "40%", maxWidth: "40%",minHeight:"200px", background: "blue" }}
              >
                <img alt="img" />
              </div>
              <div
                style={{
                  width: "58%",
                  textAlign: "start",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  paddingBottom: "14px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "10px",
                  }}
                >
                  <div
                    style={{ display: "flex", gap: "5px", alignItems: "end" }}
                  >
                    <i class="fa fa-user-circle-o"></i>{" "}
                    <span>{program?.creator}</span>
                    <i class="fa fa-clock-o"></i>
                    <span>{program?.date}</span>
                  </div>
                  <div>
                    <i class="fa fa-fire">{program?.likes}</i>
                  </div>
                </div>
                <div
                  style={{
                    lineHeight: "19px",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  {program.name}
                </div>
                <div
                  style={{
                    fontSize: "13px",

                    color: "grey",
                  }}
                >
                  {truncateText(program.content, 15)}
                </div>
                <button
                  style={{
                    width: "20%",
                    fontSize: "13px",
                    padding: "8px 0px",
                    color: "#fff",
                    background: "#0288d1",
                    border:"none",
                    borderRadius:"5px",
                    cursor:"pointer"
                  }}
                >
                  {"Read More >>"}{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
