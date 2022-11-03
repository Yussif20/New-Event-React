import SpeakersItem from "../SpeakersItem/SpeakersItem-component";
import { SpeakersWrapper } from "./Speakers-styles";
import SpeakersData from "./SpeakersData";

export default function Speakers() {
  return (
    <SpeakersWrapper>
      {SpeakersData.map((item) => {
        console.log(item.img);
        return (
          <SpeakersItem
            key={item.id}
            img={item.img}
            alt={item.alt}
            name={item.name}
            job={item.job}
          />
        );
      })}
    </SpeakersWrapper>
  );
}
