import React from "react";

const Counter = ({
  countnumber1,
  countnumber1Disc,
  countnumber2,
  countnumber2Disc,
  countnumber3,
  countnumbe31Disc,
}) => {
  return (
    <div className="sec-01-number-main">
      <div className="sec-01-number">
        <h4>{countnumber1}</h4>
        <span>{countnumber1Disc}</span>
      </div>
      <div className="sec-01-number">
        <h4>{countnumber2}</h4>
        <span>{countnumber2Disc}</span>
      </div>
      <div className="sec-01-number">
        <h4>{countnumber3}</h4>
        <span>{countnumbe31Disc}</span>
      </div>
    </div>
  );
};

export default Counter;
