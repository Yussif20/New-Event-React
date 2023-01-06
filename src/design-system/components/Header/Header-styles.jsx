import styled from "@emotion/styled";
import HeaderImage from "../../../shared/assets/imgs/header.jpg";
import theme from "../../config";

export const Headerwrapper = styled(`section`)`
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background: url(${HeaderImage}) fixed;
  padding: 20% 0;
  text-align: center;
  color: ${theme.white};
`;
export const H3 = styled("h3")`
  font-size: 1.6rem;
`;
export const Title = styled("h1")`
  font-size: 3rem;
`;
