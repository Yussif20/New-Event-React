import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OverviewItem({ icon, title, children }) {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

export default OverviewItem;
