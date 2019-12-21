// Third party
import React from "react"
// Custom components
import { StyledTitle } from "../../Styling"

const Logo = ({ style }) => {
	return (
		<div
			style={{
				whiteSpace: "break-spaces",
			}}
		>
			<StyledTitle
				style={{
					fontStyle: "italic",
					fontWeight: "bold",
					marginBottom: 20,
					...style
				}}
			>
			    <p style={{paddingLeft:10, marginBottom: -32}}>		.      .    </p>
					 Tora Olsson <br/>
					<p style={{marginTop: -16}}>.       .  </p>
			</StyledTitle>
		</div>
	)
}

export default Logo
