import React from 'react'

import styles from '../css/about.module.scss'

const About = () => {

  return (
    <section className={styles.aboutContainer}>

      <h3>#About</h3>
      <div className={styles.content}>
        <span>상상을 현실로 만드는 개발자 신재훈입니다.</span>
        <p><b>“Hello World”</b>를 처음 만난 순간, 상상이 현실로 되는 순간이였습니다.<br></br>
         컴퓨터는 알아서 계산되고 혼자서 실행되는 줄 알았던 저에게 새로운 세상으로 가는 시작점이었습니다.<br></br>
         <b>제가 겪었던 순간처럼,</b><br></br><b> “Hello World”처럼</b> <br></br>누군가에게 시작점이 되는 개발자가 되겠습니다.
          
          </p>
      </div>
    </section>
  )
}

export default About