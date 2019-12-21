// Third party
import styled from "styled-components"

const StyledTitle = styled.h1`
  color: ${props => props.theme.title};
  font-size: ${props => props.theme.fontSizes.large};

  @media screen and (max-width: 900px) {
    font-size: ${props => props.theme.fontSizes.medium};
  }
`
export default StyledTitle
