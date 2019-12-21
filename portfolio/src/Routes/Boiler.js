// Third party
import React, { Suspense, lazy } from "react"
import { Route, Switch } from "react-router-dom"
// Custom components
import { Loading, AlignCenter } from "../Components/General"
import { StyledContent } from "../Styling"
import NavBar from "../Containers/NavBar"
// Lazy loading
const Home = lazy(() => import("../Containers/Home.js"))
const About = lazy(() => import("../Containers/About.js"))

const Boiler = () => {
	return (
		<>
			<AlignCenter>
				<NavBar/>
				<StyledContent style={{textAlign: "center"}}>
					<Switch>
						<Suspense fallback={Loading}>
							<Route
								path="/"
				        exact
								render={props => <Home {...props}/>}
							/>
							<Route
								path="/my-work"
								exact
								render={props => <Home {...props}/>}
							/>
							<Route
								path="/about"
								exact
								render={props => <About {...props}/>}
							/>
						</Suspense>
					</Switch>
				</StyledContent>
			</AlignCenter>
		</>
	)
}

export default Boiler
