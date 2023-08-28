import SocialIcons from "./SocialIcons";
import Container from "./styled/Container";
import Flex from "./styled/Flex";
import StyledFooter from "./styled/FooterStyles";
import Image from "./styled/Image";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Flex>
          <Image src="./images/logo.png" alt="" />
        </Flex>

        <Flex>
          <ul>
            <li>Doganci Mah. 1405. Sokak Isparta / Türkiye</li>
            <li> +90 (539) 7918090</li>
            <li>contact@SamItCourses.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>
      </Container>
    </StyledFooter>
  );
}
