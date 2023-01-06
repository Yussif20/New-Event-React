import { H3, Headerwrapper, LearnBtn, RegBtn, Title } from "./Header-styles";
import "../../main.css";

export default function Header() {
  return (
    <Headerwrapper>
      <H3> October 15 - 23 San Francisco, CA</H3>
      <Title>Web Design Conference</Title>
      <LearnBtn className="btn">Learn More</LearnBtn>
      <RegBtn className="btn">Register Now</RegBtn>
    </Headerwrapper>
  );
}
