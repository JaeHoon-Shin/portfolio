
import { useState } from 'react'
import styles from '../css/nav.module.scss'

const Nav = ({navName,name,navBtnFn }) => {
    const [navIsActive, setNavIsActive] = useState(false);
    document.body.addEventListener('click',function(e){
        
        if(e.target.className ==='navBtn'){
            setNavIsActive(true)
        }
        else if(e.target.parentElement.className !='navMenu' && e.target.tagName != 'A'){
        e.preventDefault();
        setNavIsActive(false)
       } 
    })
    return (
        <>
        <div className={styles.navContainer}>
            <div className={`${styles.navName} ${navIsActive ? styles.active : ''}`}>
                <p className='navBtn'>{navName}</p>
            </div>
            <div className={`${styles.menu} ${navIsActive ? styles.active : ''} `}>
                <div className='navMenu'>
                    {
                        name.map((obj,key)=>{
                            return <p key={key} onClick={()=>navBtnFn(key)}>{obj}</p>
                        })
                    }
                    
                </div>
            </div>
           
        </div>
        <div className={styles.mobileNavContainer}>
             <div className={styles.mobileNav}>

                    {
                        name.map((obj,key)=>{
                            
                            return <p key={key} className={obj === navName ? styles.active : ''} onClick={()=>navBtnFn(key)}>{obj}</p>
                        })
                    }
                    
            </div>
        </div>
        </>
    )


}

export default Nav