import { faClock, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  OurProgrammsItemWrapper,
  ProgramImageSpeaker,
  ProgramImageSpeakerWrapper,
  IconWrapper,
} from "./OurProgrammsItem-styles";

export default function OurProgrammsItem({
  img,
  alt,
  title,
  name,
  description,
}) {
  return (
    <OurProgrammsItemWrapper>
      <ProgramImageSpeakerWrapper>
        <ProgramImageSpeaker src={img} alt={alt} />
      </ProgramImageSpeakerWrapper>
      <div>
        <IconWrapper>
          <FontAwesomeIcon icon={faClock} /> 09:00 am
          <FontAwesomeIcon icon={faMapMarker} /> room 505
        </IconWrapper>
        <h2>{title}</h2>
        <span>{name}</span>
        <p>{description}</p>
      </div>
    </OurProgrammsItemWrapper>
  );
}
