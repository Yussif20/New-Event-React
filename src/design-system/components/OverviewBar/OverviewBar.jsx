import React from "react";
import OverviewItem from "../Oveview-item/Overview-item";
import {
  faClock,
  faUsers,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

export default function OverviewBar() {
  return (
    <div>
      {" "}
      <OverviewItem icon={faUsers} title="650 participation">
        There is a lot of people that already sign for the program, You will be
        more than welcome to join.
      </OverviewItem>
      <OverviewItem icon={faClock} title="24 programs">
        You will find great programs and events here that you help you enjoy
        your time.
      </OverviewItem>
      <OverviewItem icon={faMicrophone} title="11 speakers">
        Our speakers are great thinkers and leaders that will inspire you in
        life.
      </OverviewItem>
    </div>
  );
}
