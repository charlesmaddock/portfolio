// Third party
import React from "react"
// Custom components
import { StyledTitle, StyledContent } from "../Styling"
import { AlignCenter } from "../Components/General"

const profile = require("../Images/Tora.jpg")

const About = () => {
  return(
      <div
        type="flex"
        style={{
          paddingTop: "10vh",
          overflow: "hidden",
          display: "inline-block"
        }}
      >
        <div style={{ margin: "left", width: "30%"}}>
          <div
            style={{
              float: "left",
              position:"absolute",
              textAlign: "left",
              width: 220,
              padding: 8
            }}
          >
            <StyledTitle style={{marginTop: 0}}>
              Hello!
            </StyledTitle>
            <p>
              My name is Tora and I am the one behind the art
              on this page!
            </p>
          </div>
          <img src={profile} alt="profile" style={{width: 220}}/>
          <div
            style={{
              float: "left",
              position:"absolute",
              textAlign: "left",
              width: 220,
              padding: 8
            }}
          >
            <StyledTitle>
              Contact me
            </StyledTitle>
            <p>
              I sell my art and do commissions. <br/><br/>
              If you find anything you like or if you have
              a request, contact me at <i>totikki@live.se</i> or
              DM me at my instagram <i>@torasskapelser.</i>
            </p>
          </div>
        </div>

      </div>
  )
}

export default About
