/* eslint-disable react-hooks/exhaustive-deps */
import IconComponent from "../IconComponent";
import DetailedLayout from "./DetailedLayout.js";
import "./superHeroSearch.css";
import React, { useState, useCallback, useEffect } from "react";
import ErrorHandelingComp from "./ErrorHandelingComp.js";

function SuperHeroSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setError] = useState(null);

  const handleSearch = useCallback(async () => {
    if (!searchQuery) return;

    setLoading(true);
    setError(null);
    setSearchResults([]);

    try {
      const response = await fetch(
        `https://www.superheroapi.com/api.php/4334337476791312/search/${searchQuery}`
      );

      if (response.ok) {
        const data = await response.json();
        if (data.response === "success") {
          setSearchResults(data.results);
        } else {
          setError(data.error);
        }
      } else {
        // Handle error based on the response status
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (err) {
      // Handle fetch error (e.g., set an error state)
      setError("Error occurred while making the request");
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleIconClick = () => {
    handleSearch(searchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchQuery);
    }
  };

  useEffect(() => {
    // Add an event listener to the input field for Enter key press
    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <div className="super-hero-search">
        <div className="super-hero-search__input">
          <input
            className="super-hero-search__input-field"
            type="text"
            placeholder="Search for a superhero..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress} // Added this line
          />
        </div>
        <div
          className="super-hero-search__icon text-dark"
          onClick={handleIconClick} // Changed this line
          disabled={loading}
        >
          <IconComponent iconName={"search"} />
        </div>
      </div>
      {loading && (
        <div className="loader">
          <div
            className="spinner-border text-warning"
            style={{ width: "4rem", height: "4rem" }}
            role="status"
          >
            <span className="sr-only"></span>
          </div>
        </div>
      )}
      {errorMessage && (
        <div>
          <ErrorHandelingComp errorMsg={errorMessage} />
        </div>
      )}
      {searchResults.length > 0 &&
        searchResults.map((hero, index) => (
          <div key={index}>
            <DetailedLayout superhero={hero} />
          </div>
        ))}
    </>
  );
}

export default SuperHeroSearch;
