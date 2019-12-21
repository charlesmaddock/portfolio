// Third party
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.link};
  font-size: 18px;
  letter-spacing: 1px;

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
`

export default StyledNavLink
