// Third party
import styled from "styled-components"

const StyledNavBar = styled.div`
  height: 100%;
  width: 200px;
  position: fixed;
  zIndex: 1;
  top: 0;
  left: 10%;
  background: ${props => props.theme.backgroundColor};
  overflowX: hidden;
  padding: 20px;

  @media screen and (max-width: 900px) {
    left: 0;
    width: 90px;
  }
`
export default StyledNavBar
