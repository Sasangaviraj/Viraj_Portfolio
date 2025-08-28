import React from "react"
import UiThemeProvider from "./context/theme"
import RootLayout from "./layout/root-layout"
import RootRouter from "./routes/root-routes"


const App = () => {
  return (
    <React.StrictMode>

    <UiThemeProvider>
      <RootRouter/>
    </UiThemeProvider>
    
    </React.StrictMode>
  )
}

export default App