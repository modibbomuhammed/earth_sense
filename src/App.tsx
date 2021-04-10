import React, { useState } from "react";
import { zephyrs, colours } from "./seedData";
import ZephyrDetails from "./components/ZephyrDetails";
import "./App.css";

type Zephyr = {
  name: string;
  type: "Standard" | "Enhanced";
  batteryPercentage: number;
  currentlyOwned: boolean;
  NO2: number;
  PM25: number;
};

type Colour = {
  value: number;
  hex: string;
};

const App: React.FC = () => {
  const sortMe = (arr: Zephyr[]): Zephyr[] => {
    return [...arr].sort((a, b) => {
      const textA = a.type.toUpperCase();
      const textB = b.type.toUpperCase();
      return textA > textB ? -1 : textA < textB ? 1 : 0;
    });
  };

  const filterByOwnership = (arr: Zephyr[]) => {
    return arr.filter(({ currentlyOwned }) => !!currentlyOwned);
  };

  let sortedZephyrs = sortMe(zephyrs);
  sortedZephyrs = filterByOwnership(sortedZephyrs);

  const [defaultState] = useState<Zephyr[]>(sortedZephyrs);
  const [currentZephyr, setCurrentZephyr] = useState<Zephyr[]>(sortedZephyrs);

  const filterByType = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const type = e.target.value;
    const copy = [...zephyrs];
    if (type === "All") {
      setCurrentZephyr(defaultState);
    } else if (type === "Standard") {
      setCurrentZephyr(copy.filter(({ type }) => type === "Standard"));
    } else {
      setCurrentZephyr(copy.filter(({ type }) => type === "Enhanced"));
    }
  };

  const ZephyrDisplay = currentZephyr.map((val) => {
    const color = Math.max(val.PM25, val.NO2);
    const higherRating = val.PM25 > val.NO2 ? "PM₂.₅" : "NO₂";
    const findColor = colours.find((val: Colour) => val.value === color);
    return (
      <ZephyrDetails
        key={Math.random() * Date.now()}
        higherRating={higherRating}
        color={findColor?.hex}
        {...val}
      />
    );
  });
  return (
    <div className="container">
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Brightbridge Council Portal</h1>
          <p className="col-md-8 fs-4">
            Brightbridge Council...Studying the Air quality of the Environment
            to Enhance the lives of its citizens
          </p>
          <p className="col-md-8 fs-4">
            A visual representation of our current installed Zephyres at various
            locations
          </p>
        </div>
      </div>

      <form className="filter-form">
        <div className="form-group">
          <h3>Filter Options</h3>
          <label htmlFor="type">Type</label>
          <select
            name="type"
            id="type"
            className="form-control"
            onChange={filterByType}
          >
            {["All", "Standard", "Enhanced"].map((val, index) => (
              <option value={val} key={index}>
                {val}
              </option>
            ))}
          </select>
        </div>
      </form>
      <div className="row gy-5">{ZephyrDisplay}</div>
    </div>
  );
};

export default App;
