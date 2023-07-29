import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import nbaLogo from "../assets/nba-logo.png";
const Header = () => {
  return (
    <Container>
      <Image src={nbaLogo} width="200px"></Image>
      <h1 className="my-2 font-monospace display-4 fw-bold text-light">
        NBA Stars
      </h1>
    </Container>
  );
};

export default Header;
