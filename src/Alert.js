import React from "react";

export default function Alert() {
  return (
    <div style={{height: '50px'}}>
      {<div className="alert alert-warning p-1" role="alert">
        Darkmode Enabled!
      </div>}
    </div>
  );
}
