import Button from "./styled/Button";
import NavStyled from "./styled/NavStyled";

const Nav = () => {
  return (
    <NavStyled>
      <div>
        <img src="./images/logo.png" width={"300px"} alt="logo" />
      </div>

      <div>
        <Button color="white">Apply Courses</Button>
        <Button bg="white">Talk To Advisor</Button>
      </div>
    </NavStyled>
  );
};

export default Nav;
