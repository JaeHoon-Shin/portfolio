import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import styles from '../css/project.module.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectItem from './ProjectItem'
import Slider from 'react-slick';
import './../App.css';
import { portfolioContext } from '../Context';
const Project = () => {
    const { projectData, info, clickBtn, projectRef, popUpBtn } = useContext(portfolioContext)

    // 슬릭 슬라이드
    const slickRef = useRef(null);
    const settings = {
        draggable: true,
        infinite: false,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        beforeChange: (current, next) => { clickBtn(next + 1) },
    }
    const previous = useCallback(() => slickRef.current.slickPrev(), []);
    const next = useCallback(() => { slickRef.current.slickNext() }, []);

    return (
        <section className={styles.testContainer} ref={projectRef} style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + `/image/project${info?.num}-backgrond.png`})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',


        }}>
            <ProjectItem Slider={Slider}/>
            {info &&
                <div className={`${styles.contentBox} aaa`} >
                    <div>
                        <article className={styles.textBox}>
                            <div className={styles.infoHeader}>
                                <p className={styles.name}>{info.name}</p>
                                <div className={styles.skillBox}>
                                    {
                                        info.skill&&info.skill.split(',').map((obj,key)=>{
                                            return <p key={key}>#{obj}</p>
                                        })
                                    }

                                </div>
                            </div>

                            <div className={styles.infoBox}>
                                <p>{info.info}</p>
                            </div>
                            <div className={styles.urlBox}>

                                <a  href={`${info.github}`}
                                    target="_blank" rel="noopener noreferrer"><svg width="25" height="25" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="white" />
                                </svg>
                                    Github</a>
                                <a href={`${info.url}`}
                                    target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill='white' d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg>
                                    Site View</a>
                            </div>
                            <button onClick={popUpBtn}>📔 Detaill View</button>
                        </article>
                        <article className={`${styles.thumbBox} projectSlider`}>
                            <Slider {...settings} ref={slickRef}>
                                {
                                    projectData.data && projectData.data.map((obj, key) => {
                                        return <figure key={key}><img src={`${process.env.PUBLIC_URL}/image/project${obj.num}-thumb.png`} alt=''></img></figure>
                                    })

                                }
                            </Slider>

                        </article>

                    </div>

                </div>
            }
            <article className={styles.btnBox}>
                <div onClick={previous} className={`${styles.prev} ${styles.btn}`} >
                    <img src={`${process.env.PUBLIC_URL}/image/arrow.svg`} alt=''></img>
                </div>
                <div onClick={next} className={`${styles.next} ${styles.btn}`} >
                    <img src={`${process.env.PUBLIC_URL}/image/arrow.svg`} alt=''></img>
                </div>
            </article>
            <div className={styles.numberBox}>
                <p>{info && info.num}</p>
                <p>{projectData.data.length}</p>
            </div>
        </section>
    )
}

export default Project