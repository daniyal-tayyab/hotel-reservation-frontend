import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./header.css";

import { faHotel, faPerson } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faTaxi } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const DEFAULT_DATE_STATE = [
  {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
];

const DEFAULT_PERSONS_OPTION = {
  adult: 1,
  children: 0,
  room: 1,
};

const Header = ({ pageType }) => {
  const [openDate, setOpenDate] = useState(false);
  const [openPersonsOption, setOpenPersonsOption] = useState(false);

  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(DEFAULT_DATE_STATE);
  const [personsOption, setPersonsOption] = useState(DEFAULT_PERSONS_OPTION);

  const navigate = useNavigate();

  const toggleDatePicker = () => setOpenDate((prevState) => !prevState);

  const togglePersonsOptions = () =>
    setOpenPersonsOption((prevState) => !prevState);

  const handlePersonOptionChange = (name, action) => {
    setPersonsOption((prevState) => {
      return {
        ...prevState,
        [name]:
          action === "inc" ? personsOption[name] + 1 : personsOption[name] - 1,
      };
    });
  };

  const handleDestinationChange = (e) => setDestination(e.target.value);

  const handleSearch = () => {
    navigate("/hotels", {
      state: {
        destination,
        date,
        personsOption,
      },
    });
  };

  return (
    <header className="header">
      <div
        className={pageType ? "header-container list-mode" : "header-container"}
      >
        <div className="header-list">
          <div className="header-list-item active">
            <FontAwesomeIcon icon={faHotel} />
            <span>Stays</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="header-list-item">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        {!pageType && (
          <>
            <h1 className="header-title">
              A lifetimne of discunts? It's Genius.
            </h1>
            <p className="header-description">
              Get rewarded for your traverls - unlock instant saving of 10% or
              more for with a free account
            </p>
            <button className="header-btn">Sign in / Register</button>

            <div className="header-search">
              <div className="header-search-item">
                <FontAwesomeIcon icon={faBed} className="header-icon" />
                <input
                  type="text"
                  className="header-search-input"
                  placeholder="Where are you going?"
                  onChange={(e) => handleDestinationChange(e)}
                />
              </div>
              <div className="header-search-item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header-icon"
                />
                <span
                  className="header-search-text"
                  onClick={toggleDatePicker}
                >{`${format(date[0].startDate, "MM/dd/yyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="header-search-item">
                <FontAwesomeIcon icon={faPerson} className="header-icon" />
                <span
                  className="header-search-text"
                  onClick={togglePersonsOptions}
                >
                  {`${personsOption.adult} Adults . ${personsOption.children} Children . ${personsOption.room} Room`}
                </span>
                {openPersonsOption && (
                  <div className="options">
                    <div className="option-item">
                      <span className="option-text">Adult</span>
                      <div className="option-counter">
                        <button
                          disabled={personsOption.adult <= 1}
                          className="option-counter-btn"
                          onClick={() =>
                            handlePersonOptionChange("adult", "dec")
                          }
                        >
                          -
                        </button>
                        <span className="option-counter-number">
                          {personsOption.adult}
                        </span>
                        <button
                          className="option-counter-btn"
                          onClick={() =>
                            handlePersonOptionChange("adult", "inc")
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option-item">
                      <span className="option-text">Children</span>
                      <div className="option-counter">
                        <button
                          disabled={personsOption.children <= 1}
                          className="option-counter-btn"
                          onClick={() =>
                            handlePersonOptionChange("children", "dec")
                          }
                        >
                          -
                        </button>
                        <span className="option-counter-number">
                          {personsOption.children}
                        </span>
                        <button
                          className="option-counter-btn"
                          onClick={() =>
                            handlePersonOptionChange("children", "inc")
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="option-item">
                      <span className="option-text">Room</span>
                      <div className="option-counter">
                        <button
                          disabled={personsOption.room <= 1}
                          className="option-counter-btn"
                          onClick={() =>
                            handlePersonOptionChange("room", "dec")
                          }
                        >
                          -
                        </button>
                        <span className="option-counter-number">
                          {personsOption.room}
                        </span>
                        <button
                          className="option-counter-btn"
                          onClick={() =>
                            handlePersonOptionChange("room", "inc")
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header-search-item">
                <button className="header-btn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
