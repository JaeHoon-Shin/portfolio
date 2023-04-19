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
              <div className={styles.skillBox}>
                {
                  info.skill && info.skill.split(',').map((obj, key) => {
                    return <p key={key}>#{obj}</p>
                  })
                }

              </div>
              <a href={`${info.url}`}
                                    target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill='white' d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z"/></svg>
                                    Site View</a>
            </div>
            <div className={styles.textBox}>
              <p><b>기획의도: </b>{info.plan && info.plan}</p>
              <p ><b>기능: </b>{info.function && info.function}</p>
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