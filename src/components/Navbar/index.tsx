import { MoveUpRight } from 'lucide-react';
import css from './index.module.scss';
import cn from 'classnames';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


type TIcon = "Arrow" | "Loop"



export const Navbar = () => {


    useGSAP(() => {
        gsap.fromTo("#navbar", {opacity: 0,scale: 0}, {opacity: 1,scale: 1, delay: 1, ease: "slow"})
    
      


      })

    return (
        <nav className={cn(css.navbar, css.container)} id='navbar'>
            <div className={css.navElements}>
                 <h1 className={css.logo}>HouseDSG</h1>
            <div>
                <ul className={css.navList}>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Customers</a>
                    </li>
                </ul>
            </div>
            <Button text="Заказать Дизайн" icon={"Arrow"}/>
            </div>
           
        </nav>
    )
}


const Button = ({text, icon}: {text: string, icon?: TIcon}) => {

    return (
        <div className={css.buttonWrapper}>
            {text &&   <button className={css.button}>{text}</button>}
            {icon === "Arrow" && (
                 <button className={css.buttonIcon}><MoveUpRight size={20}/></button>
            )}
            
        </div>
       
    )
}