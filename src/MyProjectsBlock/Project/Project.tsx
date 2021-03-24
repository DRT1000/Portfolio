import React from "react";
import style from "./Project.module.css"

type PropsType = {
    title: string
    description: string
    link: string
}

function Project(props: PropsType) {
    return (
        <div className={style.project}>
            <div className={style.icon}>
                <button className={style.button}><a href={props.link}>link</a></button>
            </div>
            <h3> {props.title}</h3>
            <span>{props.description}</span>
        </div>
    )
}


export default Project