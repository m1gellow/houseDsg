import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/homePage"
import { Layout } from "./components/Layout"
import './styles/global.scss'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
           <Route path="/" element={<HomePage/>}/>
        </Route> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
