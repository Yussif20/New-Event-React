import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Title, OverviewItemWrapper, Description } from "./OverviewItem-styles";

function OverviewItem({ icon, title, description }) {
  return (
    <OverviewItemWrapper>
      <FontAwesomeIcon color="#ef233c" size="2xl" icon={icon} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </OverviewItemWrapper>
  );
}

export default OverviewItem;
