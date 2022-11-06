import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from "../../config";
import { Title, OverviewItemWrapper, Description } from "./OverviewItem-styles";

function OverviewItem({ icon, title, description }) {
  return (
    <OverviewItemWrapper>
      <FontAwesomeIcon color={theme.primary} size="2xl" icon={icon} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </OverviewItemWrapper>
  );
}

export default OverviewItem;
