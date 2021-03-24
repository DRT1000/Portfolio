import React from "react";
import style from "./Footer.module.css"
import styleContainer from "../common/styles/container.module.css";


function Footer(){
    return(
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Mikita Konishchau</h2>
                <div className={style.share}>
                    <a href="">Facebook</a>
                    <a href="">Linkedin</a>
                    <a href="">Twitter</a>
                </div>
                <div className={style.footerEnd}>
                    All rights reserved
                </div>
            </div>
        </div>
    )
}


export default Footer