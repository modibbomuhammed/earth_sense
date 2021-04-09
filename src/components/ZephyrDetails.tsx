import React from "react";

type Props = {
  name: string;
  type: "Standard" | "Enhanced";
  batteryPercentage: number;
  currentlyOwned: boolean;
  NO2: number;
  PM25: number;
  color?: string;
  higherRating: string;
};

const ZephyrDetails: React.FC<Props> = ({
  name,
  type,
  higherRating,
  currentlyOwned,
  batteryPercentage,
  NO2,
  PM25,
  color,
}) => {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem", border: "0" }}>
        <div
          className="card-img-top"
          style={{
            backgroundColor: color,
            width: "200px",
            height: "200px",
            borderRadius: "18%",
          }}
        ></div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            The polution rating was determined by the {higherRating}
            rating.
          </p>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">Type: {type}</li>
          <li className="list-group-item">
            Battery Charge: {batteryPercentage}
          </li>
          <li className="list-group-item">NO₂: {NO2}</li>
          <li className="list-group-item">PM₂.₅: {PM25}</li>
        </ul>
      </div>
    </div>
  );
};

export default ZephyrDetails;
