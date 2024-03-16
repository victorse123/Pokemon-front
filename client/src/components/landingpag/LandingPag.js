// import React from "react";
import {useNavigate} from "react-router-dom"
import Styles from '..//landingpag/LandingPag.module.css'
import { imageImg } from "../../Image/imageImg"


const LadingPag = (props)=>{
    const navigate = useNavigate()
    const {allPokemon} = props
    
    return(
    
        <div className={Styles.pagDiv}> 
        

            <video autoPlay playsInline muted loop>
                <source src={imageImg.startVideo} type="video/mp4"/>
            </video>
            
            <div className={Styles.imgs}>
                <img className={Styles.startPag2} src={imageImg.LOGO} alt="" />
                {allPokemon.length !== 0 && <img className={Styles.startPag} type='button' onClick={()=>navigate('/home')} src={imageImg.loanding} alt="" />}
            </div>           
                
                            
        </div>
    
    )
    
}

export default LadingPag