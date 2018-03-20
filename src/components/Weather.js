import React from "react";

// Stateless functional component
// Simplify function because we are only returning one element, explicitly returning from the arrow function
// if you are only returning one single argument, get rid of parenthesis around props
const Weather = props => (
  <div className="weather--meta">
    { props.city && <p className="weather--meta--city">{ props.city }</p> }
    { props.temperature && <p className="weather--meta--temp">{ props.temperature } °</p> }
    { props.description && <p className="weather--meta--descrip">{ props.description }</p> }
    { props.error && <p className="weather--meta--error">{ props.error }</p> }
  </div>
);

export default Weather;
