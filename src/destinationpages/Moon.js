import React from "react";
export default function Moon(props) {
  let moon = props.planet;
  return (
    <div className="planet-info">
      <div className="planet-img-container">
        <img className="planet-img" src={props.img} alt="moon.name" />
      </div>
      <div className="planet-content">
        <h2 className="planet-name">{moon.name}</h2>
        <p className="planet-description">{moon.description}</p>
        <div className="planet-line"> </div>
        <div className="extra-planet-info">
          <div>
            <span> AVG. DISTANCE </span>
            <span> {moon.distance}</span>
          </div>
          <div>
            <span> Est. travel time </span>
            <span> {moon.travel}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
