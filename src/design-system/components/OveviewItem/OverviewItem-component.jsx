import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Title, OverviewItemWrapper, Description } from "./OverviewItem-styles";

function OverviewItem({ icon, title, children }) {
  return (
    <OverviewItemWrapper>
      <div>
        <FontAwesomeIcon color="#f2545f" size="2xl" icon={icon} />
      </div>
      <Title>{title}</Title>
      <Description>{children}</Description>
    </OverviewItemWrapper>
  );
}

export default OverviewItem;
