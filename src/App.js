
import './css/common.scss';
import Main from './component/Main';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';
import Nav from './component/Nav';
import Context from './Context';
import { useEffect, useRef, useState } from 'react';



function App() {

  const [position, setPosition] = useState();
  const [content,setContent] = useState();
  function onScroll() {
    setPosition(window.scrollY);
  }
  useEffect(() => {
    setContent(document.querySelectorAll('section'));
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const name = ['Main', 'About', 'Skills', 'Project', 'Contact'];
  const [navName, setNavName] = useState(name[0]);
  const [navIndex, setNavIndex] = useState(0);
  
  useEffect(() => {
    content&&content.forEach((obj, key) => {
      if (content[key].offsetTop + content[key].offsetHeight <= position) {
        setNavIndex(key + 1)
      }
      else if (content[0].offsetTop + content[0].offsetHeight / 2 > position) {
        setNavIndex(0)
      }
    }
    )
    if (position === document.body.offsetHeight - window.innerHeight) {
      setNavIndex(name.length - 1)
    }
  }, [position])
  useEffect(() => {
    setNavName(name[navIndex])
  }
    , [navIndex])
  useEffect(() => {

  }, [])
  function navBtnFn(idx) {
    content&&content[idx].scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Context>
      <Nav navName={navName} name={name} navBtnFn={navBtnFn} />
      <Main />
      <About />
      <Skills />
      <Project />
      <Contact />
    </Context>
  );
}

export default App;
