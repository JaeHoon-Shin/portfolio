import React from 'react'

import styles from '../css/contact.module.scss'
const Contact = () => {

  return (
    <>
      <section className={styles.contactContainer} >
        <div className={styles.contactContent}>
          <h3>☎CONTACT</h3>
          <div>
            <div className={styles.textBox}>
              <p> 이름 : 신 재 훈</p>
              <p> 생년월일 : 1992.08.05</p>
              <p> 이메일 : sinhoon0805@naver.com</p>
              <p> 깃허브 : <a href='https://github.com/JaeHoon-Shin' target="_blank" > https://github.com/JaeHoon-Shin </a></p>
            </div>
            <div className={styles.imgBox}>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/contact-img.gif`} alt=''></img>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.copyright}>
        <p>Copyright ⓒ 2023.JaeHoon Shin All rights reserved</p>
      </div>

      
    </>
  )
}
export default Contact