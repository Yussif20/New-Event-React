import { SpeakersItemWrapper } from "./SpeakersItem-styles";

export default function SpeakersItem({ img, alt, name, job }) {
  return (
    <SpeakersItemWrapper>
      <div>
        <img src={img} alt={alt} width="100%" />
      </div>
      <h2>{name}</h2>
      <h3>{job}</h3>
    </SpeakersItemWrapper>
  );
}
