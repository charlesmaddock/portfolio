// Third party
import styled from "styled-components"

const StyledText = styled.p`
  color: ${props => props.theme.text};
  font-size: 12px;

  @media screen and (max-width: 900px) {
    font-size: 10px;
  }
`
export default StyledText
