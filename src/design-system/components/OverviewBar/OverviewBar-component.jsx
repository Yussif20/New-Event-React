import OverviewItem from "../OveviewItem/OverviewItem-component";
import { OverviewWrapper } from "./OverviewBar-styles";

import {
  faClock,
  faUsers,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

export default function OverviewBar() {
  return (
    <OverviewWrapper>
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
    </OverviewWrapper>
  );
}
