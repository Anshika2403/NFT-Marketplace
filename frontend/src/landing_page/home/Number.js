import React from "react";

function Number({ num, des }) {
  return (
    <div>
      <h2 className="fw-bold">{num} k+</h2>
      <p className="fs-3">{des}</p>
    </div>
  );
}

export default Number;
