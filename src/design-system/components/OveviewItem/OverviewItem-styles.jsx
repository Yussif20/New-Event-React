import styled from "@emotion/styled";
import theme from "../../config";

export const OverviewItemWrapper = styled("div")`
  text-align: center;
  width: 300px;
`;

export const Title = styled("h2")`
  font-size: 28px;
  color: ${theme.white};
`;

export const Description = styled("p")`
  font-size: 18px;
  color: ${theme.grey};
`;
