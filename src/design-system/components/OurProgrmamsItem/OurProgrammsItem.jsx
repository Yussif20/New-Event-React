import { faClock, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OurProgrammsItem({
  img,
  alt,
  title,
  name,
  description,
}) {
  return (
    <div>
      <div>
        <img src={img} alt={alt} />
      </div>
      <div>
        <div>
          <FontAwesomeIcon icon={faClock} /> 09:00 am
          <FontAwesomeIcon icon={faMapMarker} /> room 505
        </div>
        <h2>{title}</h2>
        <span>{name}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
