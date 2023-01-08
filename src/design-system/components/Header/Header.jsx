import { H3, Headerwrapper, LearnBtn, RegBtn, Title } from "./Header-styles";
import "../../main.css";

export default function Header() {
  return (
    <Headerwrapper>
      <H3> October 15 - 23</H3>
      <Title>The Biggest Zoo In The Middle East Opening</Title>
      <LearnBtn className="btn">See More</LearnBtn>
      <RegBtn className="btn">Register Now</RegBtn>
    </Headerwrapper>
  );
}
