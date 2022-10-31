import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Overview({ icon, title, description }) {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={FontAwesomeIcon} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Overview;
