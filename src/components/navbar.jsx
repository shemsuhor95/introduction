import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
function NavigationBar() {
  const [Btn, setBtn] = useState(false);
  return (
    <>
      <Navbar expand="lg" light color="dark">
        <NavLink
          to="/"
          className="navbar-brand text-white"
          style={{ fontWeight: "600" }}
        >
          HOME
        </NavLink>

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
              <NavLink
                to="/about-me"
                className="nav-link text-white "
                style={{ fontWeight: "600", fontSize: "18pt" }}
              >
                About me
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                to="/contact-me"
                className="nav-link text-white"
                style={{ fontWeight: "600", fontSize: "18pt" }}
              >
                Contact Me
              </NavLink>
            </NavItem>
            <NavItem>
              <a
                target="_blank"
                href="https://github.com/shemsuhor95 "
                className="nav-link text-white"
                style={{ fontWeight: "600", fontSize: "18pt" }}
              >
                My GitHub
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar;
