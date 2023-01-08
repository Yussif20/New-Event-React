import styled from "@emotion/styled";
import theme from "../../config";

export const WelcomeContainer = styled(`section`)`
  padding: 64px;
  background-color: #fff4e6;
`;

export const Title = styled(`h2`)`
  text-align: center;
  font-size: 2.5rem;
  margin: 2rem;
  span {
    color: ${theme.primary};
  }
`;

export const Text = styled(`p`)`
  font-size: 1.4rem;
  padding: 1rem;
  line-height: 1.7rem;
`;

export const FlexContainer = styled(`div`)`
  display: flex;
  gap: 2rem;
`;

export const FlexRow = styled(`div`)`
  width: 50%;
  padding: 1.8rem;
`;
