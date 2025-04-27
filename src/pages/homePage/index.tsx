import { Circle } from 'lucide-react'
import BgImg from '../../../public/backgroundImage.png'
import css from './index.module.scss'
import cn from "classnames"
import Lenis from 'lenis'
import { useEffect } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'

export const HomePage = () => {

    useEffect( () => {
        const lenis = new Lenis()
        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
      }, [])


      gsap.registerPlugin(ScrollTrigger)


      useGSAP(() => {
        gsap.fromTo("#title", {opacity: 0, y: '20'}, {opacity: 1, y: "-20", delay: 1, ease: "slow"})
        gsap.fromTo("#downElements", {opacity: 0, y: '20'}, {opacity: 1, y: "-20", delay: 1.5, ease: "slow(0.5, 0.8)"})
        gsap.fromTo("#bgImg", {opacity: .2, }, {opacity: 1,scale: 1, delay: .5, ease: "slow(0.3, 0.3)"})
      
      })

    return (
        <>
        <main className={cn(css.home, css.container)} id='main'>
            <img src={BgImg} id='bgImg' alt="house" style={{width: '100%',position: "absolute", zIndex: "-2", height: "100%", objectFit:"cover"}}/>
            <div className={css.homeText}>
                <h1 className={css.title} id='title'>
                ПЕРЕВОПЛАЩАЕМ <br />ПРОСТРАНСТВО В МЕСТО,  <br /> ГДЕ ХОЧЕТСЯ ЖИТЬ
                </h1>
            </div>
                <div className={css.downElements} id="downElements">
                    <div className={css.tagLinkWrapper}>
                        <div className={css.tagLink}>
                            <p>Project List</p>
                        </div>
                        <div className={css.tagLink}>
                            <p>Projects</p>
                        </div>
                        <div className={css.tagLink}>
                            <p>Design</p>
                        </div>
                        <div className={css.tagLink}>
                            <p>Project List</p>
                        </div>
                    </div>
                    <div className={css.imgPlace}>

                    </div>
                   
                </div>
        </main>
        <section className={css.aboutSection} id='about'>
            <div className={css.aboutText}>
                <h1 className={css.aboutTitle}>ВОПЛАЩАЕМ <span className={css.textBg}>МЕЧТЫ</span><br /> 
                В СТИЛЬНЫЕ ИНТЕРЬЕРЫ</h1>
                <p className={css.aboutDescription}>
                 is simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard <br /> dummy text ever since the 1500s, when an unknown <br /> printer took a galley of type and scrambled it to make a <br /> type specimen book. 
                </p>
            </div>
            <div className={css.cards}>
            <InfoCard/>
            <InfoCardSecond/>
            </div>
        </section>
        <section className={css.projects}>
            <div className={css.projectsText}>
                <div>
                     <h1 className={css.projectsTitle}><Circle size={35}/>НАШИ ПРОЕКТЫ</h1>
                <p className={css.projectsDescription}>
                 МЫ СОЗДАЁМ ВЫСОКОКАЧЕСТВЕННЫЕ И <br /> ИНДИВИДУАЛЬНЫЕ ОБЪЕКТЫ, КОТОРЫЕ <br /> ПОВЫШАЮТ КАЧЕСТВО ЖИЗНИ
                </p>
                </div>
                <p className={css.projectsDescriptionSecond}>
                 is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500s.
                </p>
            </div>
           <div className={css.projectCardWrapper}>
           <ProjectCards/>
           </div>

        </section>
        </>
        
    )
}


const InfoCard = () => {
    return (
        <div className={cn(css.infoCard)}>
            <div className={css.cardContent}>
                <h1 className={css.cardTitle}>ЗА 10 ЛЕТ МЫ РЕАЛИЗОВАЛИ 350+ ПРОЕКТОВ</h1>
                <p className={css.cardDescriotion}> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <div className={css.cardInput}>
                <Circle/>
                </div>
            </div>
        </div>
    )
}
const InfoCardSecond = () => {
    return (
        <div className={cn(css.infoCardS)}>
            <div className={css.cardContentS}>
                <h1 className={css.cardTitleS}>ЗА 10 ЛЕТ МЫ РЕАЛИЗОВАЛИ 350+ ПРОЕКТОВ</h1>
                <p className={css.cardDescriotionS}> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <div className={css.cardInputS}>
                    <Circle/>
                </div>
            </div>
        </div>
    )
}

const ProjectCards = () => {
    return (
        <div className={css.projectCard}>
            <div className={css.leftCards}>
                <div className={css.cardL}>

                </div>
            </div>
            <div className={css.rightCards}>
            <div className={css.cardR}>

</div>
            <div className={css.cardR}>

</div>
            </div>
        </div>
    )
}