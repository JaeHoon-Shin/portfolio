import React from 'react'

import styles from '../css/main.module.scss'

const Main = () => {

  return (
    <section className={styles.mainContainer}>
      <div className={styles.title}>

        <p>HOON'S</p>
        <p>PORTFOLIO</p>
      </div>
      {/* <div className={styles.mobileInformation}>
        <div>
          <div>
            <p>My Name</p><p>신재훈</p>
          </div>
          <div>
            <p>My Certification</p><p>정보처리기사</p>
          </div>

          <div><p>My Education</p>
            <p>Java & JavaScript library을<br />
              활용한 반응형 웹 개발자 양성과정<br />
              (2019.12.16 ~ 2020.06.12 )</p>
            <p>프로젝트기반 프론트엔드(React,Vue)<br />
              웹&앱 SW개발자 양성과정<br />
              (2022.11.2~2023.04.25)</p>
          </div>
        </div>
      </div> */}
      <div className={styles.leftBox}>
        {/* <div className={styles_view.viewContentInfoBox}>
          <p>Main</p>
        </div> */}

        <p className={styles.number} style={{ display: 'none' }}>1992</p>
        <p className={styles.phon}>Phon : 010-9914-3146</p>
      </div>
      <div className={styles.rightBox}>
        <div className={styles.viewContentInfoBox1}><p>About</p></div>
        <div className={styles.informationBox}>
          <div className={styles.information}>
            <div><p>My Name</p><p>신재훈</p></div>
            <div><p>My Certification</p><p>정보처리기사</p></div>
            <div><p>My Education</p>
              <p>Java & JavaScript library을<br />
                활용한 반응형 웹 개발자 양성과정<br />
                (2019.12.16 ~ 2020.06.12 )</p>
              <p>프로젝트기반 프론트엔드(React,Vue)<br />
                웹&앱 SW개발자 양성과정<br />
                (2022.11.2~2023.04.25)</p>
            </div>
          </div>
        </div>
        <div className={styles.pattern}></div>
        <p className={styles.email}>Email : sinhoon0805@naver.com</p>
      </div>
      <p className={styles.bottomLogo}>JH</p>
    </section>

  )
}

export default Main