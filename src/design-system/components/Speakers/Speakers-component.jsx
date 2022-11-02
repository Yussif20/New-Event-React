import SpeakersItem from "../SpeakersItem/SpeakersItem-component";
import SpeakersData from "./SpeakersData";

export default function Speakers() {
  return (
    <div>
      {SpeakersData.map((item) => {
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
    </div>
  );
}
