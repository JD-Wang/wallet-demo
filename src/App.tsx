import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./view/home"
import { Web3ReactProvider, createWeb3ReactRoot } from "@web3-react/core"

function getLibrary(provider) {
  console.log(provider)
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Web3ReactProvider>
  )
}

export default App
