import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar"
import css from './index.module.scss'

export const Layout = () => {
    return (
        <div>
            <div>
                     <Navbar/>
            </div>
       
            <Outlet/>
        </div>
    )
}