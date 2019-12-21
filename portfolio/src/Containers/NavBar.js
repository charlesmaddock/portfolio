// Third party
import React from "react"
import { Row, Col, Icon } from "antd"
// Custom components
import { Logo } from "../Components/General"
import {
  StyledNavLink,
  StyledText,
  StyledIcon,
  StyledNavBar
} from "../Styling"

const NavBar = () => {
  return(
    <StyledNavBar>
      <Col>
        <Row style={{marginBottom: 6}}>
          <StyledNavLink
          to={"/"}>
            <Logo style={{fontSize: 26}}/>
          </StyledNavLink>
        </Row>
        <Row style={{marginBottom: 6}}>
          <StyledNavLink
          to={"/my-work"}
          activeStyle={{
            color: "black"
          }}>
            » My work
          </StyledNavLink>
        </Row>

        <Row style={{marginBottom: 30}}>
          <StyledNavLink
          to={"/about"}
          activeStyle={{
            color: "black"
          }}>
            » About me
          </StyledNavLink>
        </Row>

        <Row>
          <StyledIcon
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:totikki@live.se"
          >
            <Icon type="mail"/>
          </StyledIcon>

          <StyledIcon
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/torasskapelser/"
          >
            <Icon type="instagram"/>
          </StyledIcon>

          <StyledIcon
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/tora.olsson.1"
          >
            <Icon type="facebook"/>
          </StyledIcon>
        </Row>

        <Row style={{opacity: 0.6}}>
          <StyledText>
            All Images Copyright © Tora Olsson, 2019,
            All Rights Reserved
          </StyledText>
        </Row>
      </Col>
    </StyledNavBar>
  )
}

export default NavBar
