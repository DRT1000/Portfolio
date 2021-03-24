import React from "react";
import style from "./remoteWork.module.css"
import styleContainer from "../common/styles/container.module.css";


function RemoteWork() {


    return (
        <div className={style.remoteWorkBlock}>
            <div className={`${styleContainer.container} ${style.remoteWorkContainer}`}>
                <h2 className={style.title}>I Am Available For Freelancer</h2>
                <button>Hire me</button>
            </div>
        </div>
    )
}

export default RemoteWork