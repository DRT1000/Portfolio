import React from "react";
import style from "./MyProjectsBlock.module.css"
import styleContainer from "./../common/styles/container.module.css"
import Project from "./Project/Project";

type ProjectType = {
    title: string
    description: string
    link: string
}


function MyProjectsBlock() {

    const projects: Array<ProjectType> = [
        {title: "TodoList", description: "some text", link: ""},
        {title: "Social Network", description: "some text", link: ""}
    ]

    return (
        <div className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    {projects.map((p) =>
                        <Project key={p.title} title={p.title} description={p.description} link={p.link}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MyProjectsBlock