import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

import "./list.css";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [personsOption, setPersonsOption] = useState(
    location.state.personsOption
  );

  const [isDateRangeOpen, setIsDateRangeOpen] = useState(false);
  const toggleDateRange = () => setIsDateRangeOpen((prevState) => !prevState);

  return (
    <div>
      <Navbar />
      <Header pageType="list" />
      <main className="list-container">
        <div className="list-wrapper">
          <aside className="list-search">
            <h1 className="list-search-title">Search</h1>
            <div className="list-search-item">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="list-search-item">
              <label>Check-in Date</label>
              <span onClick={toggleDateRange}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {isDateRangeOpen && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="list-search-item">
              <label>Options</label>
              <div className="list-search-options">
                <div className="list-search-option-item">
                  <span className="list-search-option-text">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="list-search-option-input" />
                </div>
                <div className="list-search-option-item">
                  <span className="list-search-option-text">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="list-search-option-input" />
                </div>
                <div className="list-search-option-item">
                  <span className="list-search-option-text">Adult</span>
                  <input
                    type="number"
                    className="list-search-option-input"
                    placeholder={personsOption.adult}
                    min={1}
                  />
                </div>
                <div className="list-search-option-item">
                  <span className="list-search-option-text">Children</span>
                  <input
                    type="number"
                    className="list-search-option-input"
                    placeholder={personsOption.children}
                    min={0}
                  />
                </div>
                <div className="list-search-option-item">
                  <span className="list-search-option-text">Room</span>
                  <input
                    type="number"
                    className="list-search-option-input"
                    placeholder={personsOption.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </aside>
          <section className="list-result">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </section>
        </div>
      </main>
    </div>
  );
};

export default List;
