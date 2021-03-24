import React from "react";
import style from "./ContactBlock.module.css"
import styleContainer from "../common/styles/container.module.css";


function ContactBlock() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.title}>Contact</h2>
                <form className={style.form}>
                    <input/>
                    <input/>
                    <textarea className={style.textarea}></textarea>
                </form>
                <button className={style.button}>Send</button>
            </div>
        </div>
    )
}


export default ContactBlock