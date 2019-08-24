import { Link } from "gatsby"
import React from "react"
import styled from "@emotion/styled"
import styleVars from "../styles/vars"
import logo from "../images/logo.svg"

const Wrapper = styled.header`
  width: 100%;
  max-width: ${styleVars.maxWidth};
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.img`
  width: 25px;
`
const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0 0 0 20px;
`
const NavItem = styled.li`
  margin-left: 30px;
`
const NavLink = styled(Link)`
  color: ${styleVars.headerTextColor};
  text-decoration: none;
  font-weight: 500;
  font-size: 13px;
`

const Header = ({className}) => (
  <Wrapper className={className}>
    <Link to="/">
      <Logo src={logo} alt="Logo Robin Wijnant" />
    </Link>
    <nav>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/cases">Projects</NavLink>
        </NavItem>
      </NavList>
    </nav>
  </Wrapper>
)

export default Header
