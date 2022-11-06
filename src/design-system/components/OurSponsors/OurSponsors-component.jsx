import OurSponsorsData from "./OurSponsorsData";
import OurSponsorsItem from "../OurSponsorsItem/OurSponsorsItem-component";

export default function OurSponsors() {
  return (
    <div>
      {OurSponsorsData.map((item) => {
        return <OurSponsorsItem key={item.id} img={item.img} alt={item.alt} />;
      })}
    </div>
  );
}
