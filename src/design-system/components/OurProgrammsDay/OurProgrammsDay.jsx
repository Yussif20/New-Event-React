import OurProgrammsItem from "../OurProgrmamsItem/OurProgrammsItem-component";
import OurProgrammsData from "./OurProgrammsData-component";

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
