import React, { useState } from "react";

import "./searchCourses.css";
import Sidebar from "../sidebar/sideBar";
import Programs from "../programs/programs";
import { useLocation, useNavigate } from "react-router-dom";
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
const SearchCourse = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    keyword: "",
    // Add more filters as needed
  });
  const [searchedValue, setSearchedValue] = useState("");
  const query = useQuery();
  const searchValue = query.get("s");
  console.log(searchValue, "sdfgfdsasffd");
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };
  const handleSearch = () => {
    setSearchedValue(filters?.keyword);
    navigate(`/search-course?s=${encodeURIComponent(filters?.keyword)}`);
  };
  return (
    <div>
      <div className="search-course-page">
        <Sidebar
          filters={filters}
          searchedValue={searchValue}
          onFilterChange={handleFilterChange}
          handleSearch={handleSearch}
        />
        <Programs filters={searchValue} />
      </div>
    </div>
  );
};

export default SearchCourse;
