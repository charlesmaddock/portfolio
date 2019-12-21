// Third party
import React, { Suspense } from "react"
// Custom
import { Loading } from "./Components/General"
import Router from "./Routes/Router"
import { lightTheme } from "./Styling/Themes"
import GlobalStyles from "./Styling/GlobalStyles"
import { ThemeProvider } from "styled-components"

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={Loading}>
        <GlobalStyles/>
        <Router/>
      </Suspense>
    </ThemeProvider>
  )
}

export default App
