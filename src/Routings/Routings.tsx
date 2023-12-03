import { Route,Routes } from "react-router-dom"
import Home from "../pages/normalPage/Home"

const Routings = () => {
  return (
    <Routes>
    <Route  path="/" Component={Home}/>
    </Routes>
  )
}

export default Routings