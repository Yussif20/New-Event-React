import OverviewItem from "../OveviewItem/OverviewItem-component";
import { OverviewWrapper } from "./OverviewBar-styles";
import OverviewData from "../../../OverviewData";

export default function OverviewBar() {
  return (
    <OverviewWrapper>
      {OverviewData.map((item) => {
        return (
          <OverviewItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </OverviewWrapper>
  );
}
