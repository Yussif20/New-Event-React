import styled from "@emotion/styled";
import theme from "../../config";

export const WelcomeContainer = styled(`section`)`
  padding: 64px;
  background-color: #ffe8cc;
`;

export const Title = styled(`h2`)`
  text-align: center;
  font-size: 2.5rem;
  margin: 2rem;
  color: ${theme.primary};
`;

export const Text = styled(`p`)`
  font-size: 1.2rem;
  margin: 1.5rem;
`;

export const FlexContainer = styled(`div`)`
  display: flex;
  gap: 2rem;
`;

export const FlexRow = styled(`div`)`
  padding: 1.8rem;
`;
