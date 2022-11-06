import OurSponsorsData from "./OurSponsorsData";
import OurSponsorsItem from "../OurSponsorsItem/OurSponsorsItem-component";
import { SponsersWrapper } from "./OurSponsers-styles";

export default function OurSponsors() {
  return (
    <SponsersWrapper>
      {OurSponsorsData.map((item) => {
        return <OurSponsorsItem key={item.id} img={item.img} alt={item.alt} />;
      })}
    </SponsersWrapper>
  );
}
