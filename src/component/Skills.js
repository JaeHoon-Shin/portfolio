import React from 'react'


import styles from '../css/skills.module.scss'

const Skills = () => {

  return (
    <section className={styles.skillContainer}>
      {/* <div className={styles_view.viewContentInfoBox}>
        <p>Skills</p>
      </div> */}
      <h3>🔧SKILLS</h3>
      <article>
        <p>Front-End</p>
        <div className={styles.skillBox}>
          <ul>
            <li>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/skills/react.svg`} alt='react-logo'>
                </img>
              </figure>
              <figcaption>
                <div>
                  <p>React.js</p>
                  <p>여러가지 훅을 이용하여 <b>코드의 재사용성</b>을 높인 웹사이트 구현할 수 있습니다. </p>
                </div>
              </figcaption>
            </li>
            <li>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/skills/next-js.svg`} alt='next-js-logo'>
                </img>
              </figure>
              <figcaption>
                <div>
                  <p>Next.js</p>
                  <p><b>SSR을 이해</b>하고 있으며, 별도의 서버를 구현하지 않고 웹앱 사이트를 구현할 수 있습니다. </p>
                </div>
              </figcaption>
            </li>
            <li>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/skills/js.svg`} alt='js-logo'>
                </img>
              </figure>
              <figcaption>
                <div>
                  <p>JavaScript</p>
                  <p><b>메소드, dom을 이용</b>하여 이벤트를 처리 할 수 있습니다.</p>
                </div>
              </figcaption>
            </li>
            <li>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/skills/html.svg`} alt='html-logo'>
                </img>
              </figure>
              <figcaption>
                <div>
                  <p>HTML</p>
                  <p><b>웹 접근성,웹 표준을 준수</b>하며 마크업 할 수 있습니다.</p>
                </div>
              </figcaption>
            </li>
            <li>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/skills/css.svg`} alt='css-logo'>
                </img>
              </figure>
              <figcaption>
                <div>
                  <p>CSS</p>
                  <p><b>postion, flex를 이용</b>하여 레이아웃을 구현할 수 있습니다.</p>
                </div>
              </figcaption>
            </li>
            <li>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/skills/sass.svg`} alt='sass-logo'>
                </img>
              </figure>
              <figcaption>
                <div>
                  <p>Sass</p>
                  <p><b>scss문법을 통해 모듈화</b>를 하여 효율적인 스타일 작업을 할 수 있습니다.</p>
                </div>
              </figcaption>
            </li>
            <li>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/skills/ajax.svg`} alt='ajax-logo'>
                </img>
              </figure>
              <figcaption>
                <div>
                  <p>Ajax</p>
                  <p><b>비동기 처리</b>를 통해 현재페이지가 다시 로딩하지 않고도, 일부분만을 갱신할 수 있습니다.</p>
                </div>
              </figcaption>
            </li>

          </ul>
        </div>
      </article>
      <article>
        <p>Back-End</p>
        <div className={styles.skillBox}>
          <ul>
            <li>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/skills/java.svg`} alt='java-logo'>
                </img>
              </figure>
              <figcaption>
                <div>
                  <p>JAVA</p>
                  <p>오버로딩, 오버라이딩을 사용하여 <b>코드의 재사용성</b>을 높일 수 있습니다.</p>
                </div>
              </figcaption>
            </li>
            <li>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/skills/spring.svg`} alt='spring-logo'>
                </img>
              </figure>
              <figcaption>
                <div>
                  <p>Spring</p>
                  <p><b>MVC 패턴을 사용</b>하여 웹 페이지를 구현하고 , <b>DI</b>를 통해 결합도를 낮추고, 유연성을 높일 수 있습니다.</p>
                </div>
              </figcaption>
            </li>
            <li>
              <figure>
              <img src={`${process.env.PUBLIC_URL}/image/skills/express.svg`} alt='express-logo'>
                </img>
              </figure>
              <figcaption>
                <div>
                  <p>Express</p>
                  <p>데이터베이스와 front를 <b>연동하는 서버</b>를 구현할 수 있습니다.</p>
                </div>
              </figcaption>
            </li>
            
          </ul>
        </div>
      </article>
      <article>
        <p>Other</p>
        <div className={styles.skillBox}>
          <ul>
            <li>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/skills/oracle.svg`} alt='oracle-logo'>
                </img>
              </figure>
              <figcaption>
                <div>
                  <p>ORACLE</p>
                  <p>create, delete, update, select 를 사용하여 <b>CRUD</b>를 구현 할 수 있고, <b>서브쿼리와 조인문</b>을 이용하여 쿼리를 작성할 수 있습니다.</p>
                </div>
              </figcaption>
            </li>
            <li>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/skills/mysql.svg`} alt='mysql-logo'>
                </img>
              </figure>
              <figcaption>
                <div>
                  <p>MySQL</p>
                  <p>create, delete, update, select 를 사용하여 <b>CRUD</b>를 구현 할 수 있고, <b>서브쿼리와 조인문</b>을 이용하여 쿼리를 작성할 수 있습니다.</p>
                </div>
              </figcaption>
            </li>
            <li>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/skills/amazon-S3.svg`} alt='amazon-S3-logo'>
                </img>
              </figure>
              <figcaption>
                <div>
                  <p>Amazon-S3</p>
                  <p>S3 권한설정을 할 수 있고, <b>S3버킷을 생성하여 이미지 업로드 서버</b>를 구현할 수 있습니다.</p>
                </div>
              </figcaption>
            </li>
            <li>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/skills/vscode.svg`} alt='vscode-logo'>
                </img>
              </figure>
              <figcaption>
                <div>
                  <p>VScode</p>
                  <p><b>현재 가장 많이 사용</b>하는 개발 툴이며, React, Next 등의 여러 프로젝트를 구현 하였습니다.</p>
                </div>
              </figcaption>
            </li>
            <li>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/skills/figma.svg`} alt='figma-logo'>
                </img>
              </figure>
              <figcaption>
                <div>
                  <p>Figma</p>
                  <p>프로토타입을 구현하기 전, ui/ux의 아이디어를 적용하여 <b>와이어프레임</b>을 구현할 수 있습니다.</p>
                </div>
              </figcaption>
            </li>
            <li>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/skills/git.svg`} alt='git-logo'>
                </img>
              </figure>
              <figcaption>
                <div>
                  <p>git</p>
                  <p>add , commit, , pull , push , merge를 사용하여 <b>형상관리</b>를 할 수 있습니다.</p>
                </div>
              </figcaption>
            </li>
            <li>
              <figure>
                <img src={`${process.env.PUBLIC_URL}/image/skills/github.svg`} alt='github-logo'>
                </img>
              </figure>
              <figcaption>
                <div>
                  <p>github</p>
                  <p>add , commit, , pull , push , merge를 사용하여 <b>형상관리</b>를 할 수 있습니다.</p>
                </div>
              </figcaption>
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}

export default Skills