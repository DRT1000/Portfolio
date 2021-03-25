import React from "react";
import style from "./skillsBlock.module.css"
import styleContainer from "../common/styles/container.module.css"
import Skill from "./skill/Skill";

export type SkillType = {
    title: string
    description: string
}


function SkillsBlock() {
    const skills: Array<SkillType> = [
        {title: "Typescript", description: "1"},
        {title: "HTML", description: "2"},
        {title: "Css", description: "3"},
        // {title: "React", description: "4"}
    ]

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    {skills.map((s) =>
                        <Skill key={s.title} title={s.title} description={s.description}/>
                    )}
                </div>
            </div>
        </div>
    )
}


export default SkillsBlock