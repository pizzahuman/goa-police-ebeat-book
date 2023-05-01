// This contains officers station details, this will have to be changes according to the job roles of the officer

import React from "react";

export const Station = () => {
  return (
    <>
      <div className="station-details">
        <div>
          Beat Area: 1A
        </div>
        <div>
          Police Station: xyz....
        </div>
        <div>
          <span>
            Police Inspector:
            <ul type="none" className="flex-col-center">
              <li>Anil Rathod</li>
              <li>PNo: 9087647411</li>
            </ul>
          </span>
        </div>
      </div>
    </>
  );
};
