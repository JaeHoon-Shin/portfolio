import React, { useContext, useState } from 'react'
import { portfolioContext } from '../Context';
import styles from '../css/projectItem.module.scss'
const Projectinfo = () => {
  const {info,setPopup,isPopup } = useContext(portfolioContext);
  const [imgIdx, setImgIdx] = useState(0); // 인포 이미지 슬라이드 인덱스 값
  const closeBtn = (e) => {
    if (e.target === e.currentTarget) {
      setPopup(!isPopup);
      setImgIdx(0);
      document.body.style.overflow = "unset";
    }
  }
  function slideBtn(positon) {
    if (positon === 'left') {
      if (imgIdx > 0) {
        setImgIdx(imgIdx - 1);
      }
    }
    else {
      if (imgIdx < info.imgUrl.length - 1) {
        setImgIdx(imgIdx + 1);
      }
    }
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
              <div className={styles.imgBox}>
                <div className={styles.imgSlider} style={{
                  transform: `translateX(-${imgIdx * 100}%)`,
                  transition: '0.5s'
                }}>
                  {
                    info.imgUrl && info.imgUrl.map((obj, key) => {
                      return <figure key={key}>
                        <img src={obj} alt=''></img>
                      </figure>
                    })
                  }

                </div>
                <div className={styles.pagiNation}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="black" height="48" viewBox="0 96 960 960" width="48" onClick={() => { slideBtn('left') }}><path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z" /></svg>
                  {imgIdx + 1} / {info.imgUrl.length}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="black" height="48" viewBox="0 96 960 960" width="48" onClick={() => { slideBtn('rigth') }}><path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z" /></svg>
                </div>
                <div className={styles.skillBox}>
                  <div className={styles.skill}>
                    <p>#SKILL : {info && info.skill}</p>
                  </div>
                  <div className={styles.github}>
                    <p>#GITHUB : <a href={`${info.github}`}
                      target="_blank" rel="noopener noreferrer">{info && info.github}</a></p>
                  </div>
                  <div className={styles.url}>
                    <p>#URL : <a href={`${info.url}`}
                      target="_blank"  rel="noopener noreferrer">{info && info.url}</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.textBox}>
              <p><b>Summary:</b>{info && info.summary}</p>
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