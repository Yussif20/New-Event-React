import { faClock, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OurProgrammsItem(img, alt, title, name, description) {
  return (
    <div>
      <div>
        <img src={img} alt={alt} />
      </div>
      <div>
        <div>
          <FontAwesomeIcon icon={faClock} />
          <FontAwesomeIcon icon={faMapLocationDot} />
        </div>
        <h2>{title}</h2>
        <span>{name}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}
