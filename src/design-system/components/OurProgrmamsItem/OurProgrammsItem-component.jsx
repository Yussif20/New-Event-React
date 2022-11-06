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
          <div>
            <FontAwesomeIcon icon={faClock} /> 09:00 am
          </div>
          <div>
            <FontAwesomeIcon icon={faMapMarker} /> room 505
          </div>
        </IconWrapper>
        <h2>{title}</h2>
        <h3>By {name}</h3>
        <p>{description}</p>
      </div>
    </OurProgrammsItemWrapper>
  );
}
