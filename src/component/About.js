import React from 'react'

import styles from '../css/about.module.scss'

const About = () => {

  return (
    <section className={styles.aboutContainer}>

      <h3>#About</h3>
      <div className={styles.content}>
        <span>나의대한 소개글 등등</span>
        <p>작년 여름에 4학년 1학기가 끝나고 개발자 취업을 준비하면서 '그래도 포트폴리오 하나는 가지고 있어야 되지 않겠어?' 하는 마음에 개발자 포트폴리오의 
          핵심도 알지 못한 채 그냥 만들었습니다.그렇게 두 달 동안 열심히 만든 개발자 포트폴리오는 반응이 정말 좋았습니다.</p>
      </div>
    </section>
  )
}

export default About