import { createContext, useEffect, useRef, useState } from "react";
import projectData from './json/project.json';
export const portfolioContext = createContext(null);

const Context = ({ children }) => {


    // 컴포넌트 네비게이션에 관한 
    // window 해상도에 변경됨에 따라 함수로 컨트롤 가능
    /* window.onresize=()=>{
        console.log(mainRef.current.clientHeight)
    } */
    // 프로젝트 정보 및 상세
    
    
    const [info, setInfo] = useState();
  
    const clickBtn = (idx) => {
        setInfo(() => { return projectData.data.filter((obj) => obj.num === idx)[0] });
    }
    useEffect(() => {
        setInfo(projectData.data[0])

    }, []);

    
    // 팝업 관련
    const projectRef = useRef();
    const [isPopup, setPopup] = useState(false);
    const popUpBtn = () => {
        setPopup(true);
        /* document.body.style.overflow = "hidden"; */
        projectRef.current?.scrollIntoView({ behavior: 'smooth' }); // 팝업 버튼 클릭시 해당 돔으로 스크롤 이동
    }




    return (
        <portfolioContext.Provider value={{ projectData, info, clickBtn, projectRef, isPopup, setPopup, popUpBtn}}>
            {children}
        </portfolioContext.Provider>
    )
}
export default Context