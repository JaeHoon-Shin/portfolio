import React, { useContext, useState } from 'react'
import { portfolioContext } from '../Context';
import styles from '../css/projectItem.module.scss'
const Projectinfo = ({ Slider }) => {
  const { info, setPopup, isPopup } = useContext(portfolioContext);
  const closeBtn = (e) => {
    if (e.target === e.currentTarget) {
      setPopup(!isPopup);
      document.body.style.overflow = "unset";
    }
  }
  const settings = {
    draggable: true,
    infinite: false,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000
  }
  
  return (
    <div className={`${styles.itemContainer} ${isPopup ? styles.active : ''}`} onClick={(e) => { closeBtn(e) }}>
      <article className={styles.infoBox}>
        <button onClick={(e) => { closeBtn(e) }}></button>
        <div className={styles.titleBox}>
          <p>{info && info.name}</p>
          <p>{info && info.title} ({info && info.date})</p>

        </div>
        {
          info &&
          <div className={styles.infoContentBox}>
            <div className={styles.leftBox}>
              <div className={`${styles.imgBox} detailSlider`}>
                <Slider {...settings}>
                  {
                    info.imgUrl && info.imgUrl.map((obj, key) => {
                      return <figure key={key}>
                        <img src={process.env.PUBLIC_URL + '/' + obj} alt=''></img>
                      </figure>
                    })
                  }
                </Slider>
              </div>
              <a href={`${info.url}`}
              target="_blank" rel="noopener noreferrer">
              {info.url}</a>
              <div className={styles.skillBox}>
                {
                  info.skill && info.skill.split(',').map((obj, key) => {
                    return <p key={key}>#{obj}</p>
                  })
                }

              </div>
              
            </div>
            <div className={styles.textBox}>
              <p><b>기획의도: </b>{info.plan && info.plan}</p>
              <p ><b>기능: </b>{info.function && info.function}</p>
              {info.role ? <p><b>역할: </b>{info.role}</p>:<></>}
              <p><b>Review:</b>
                {info && info.review}
              </p>
              
            </div>

          </div>
        }
      </article>

    </div>


  )
}

export default Projectinfo