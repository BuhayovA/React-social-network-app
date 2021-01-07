import React from 'react';
import style from "./ProfileInfo.module.css"

import Background from "./Background/Background"

const ProfileInfo = () => {
    return (
        <div>
            <div className={style.title}>
            </div>
            <Background/>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo