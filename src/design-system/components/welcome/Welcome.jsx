import {
  FlexContainer,
  WelcomeContainer,
  FlexRow,
  Title,
  Text,
} from "./Welcome-styles";
import WelcomeImage from "../../../shared/assets/imgs/welcome.jpg";

function Welcome() {
  return (
    <WelcomeContainer>
      <Title>Welcome to our lovely Zoo</Title>
      <FlexContainer>
        <FlexRow>
          <Text>
            Here you can spend the most wonderful time you and your family.There
            is activities that fit all ages.You can feed the animals, play and
            have fun with them. There is great places here where you can take
            lovely photos and make some good memories.
          </Text>
          <Text>
            Here you can spend the most wonderful time you and your family.There
            is activities that fit all ages.You can feed the animals, play and
            have fun with them. There is great places here where you can take
            lovely photos and make some good memories.
          </Text>
        </FlexRow>
        <FlexRow>
          <img src={WelcomeImage} alt="welcome" />
        </FlexRow>
      </FlexContainer>
    </WelcomeContainer>
  );
}
export default Welcome;
