import OurProgrammsItem from "../OurProgrmamsItem/OurProgrammsItem";
import OurProgrammsData from "./OurProgrammsData";

export default function OurProgrammsDay() {
  return (
    <div>
      {OurProgrammsData.map((item) => {
        return (
          <OurProgrammsItem
            key={item.id}
            img={item.img}
            alt={item.alt}
            title={item.title}
            name={item.name}
            description={item.description}
          />
        );
      })}
    </div>
  );
}
