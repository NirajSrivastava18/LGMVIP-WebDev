import React from "react";
import { Nav, NavH1, HeroBtnWrapper, Button } from "./NavBarStyled";

const NavBar = (props) => {
  return (
    <Nav>
      <NavH1>Fetch User</NavH1>
      <HeroBtnWrapper>
        <Button
          onClick={props.onClick}
          primary="true"
          dark="true"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          Get Users
        </Button>
      </HeroBtnWrapper>
    </Nav>
  );
};

export default NavBar;
