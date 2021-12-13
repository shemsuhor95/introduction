import { useState } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
} from "reactstrap";
function NavigationBar() {
  const [Btn, setBtn] = useState(false);
  return (
    <>
      <Navbar expand="lg" light>
        <NavbarBrand href="/" className="mx-5" style={{ borderRadius: "30%" }}>
          Home
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            let expand = true;
            let notExpand = false;
            if (Btn === false) {
              setBtn(expand);
            } else {
              setBtn(notExpand);
            }
          }}
        />
        <Collapse navbar isOpen={Btn}>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/about-me">About me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                target="_blank"
                href="https://github.com/shemsuhor95 "
                className=" text-50-dark mx-2"
              >
                My GitHub
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact-me">Contact Me</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
