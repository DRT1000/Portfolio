import React from "react";
import style from "./skill.module.css"

type PropsType = {
    title: string
    description: string
}

function Skill(props: PropsType) {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{props.title}</h3>
            <span >{props.description}</span>

        </div>

    )
}

export default Skill