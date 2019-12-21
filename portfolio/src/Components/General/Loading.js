import React from 'react'

import Logo from './Logo'
import AlignCenter from './AlignCenter'

function Loading(){
	return (
		<AlignCenter style={{marginTop: "20vh"}}>
			<div style={{margin: "auto"}}>
        <Logo style={{fontSize: 40}}/>
			</div>
		</AlignCenter>
	)
}

export default Loading
