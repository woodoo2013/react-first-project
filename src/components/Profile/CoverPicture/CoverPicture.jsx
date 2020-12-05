import React from "react";
import style from './CoverPicture.module.css'


const CoverPicture = () => {
    return (
        <div className={style.coverPicture}>
            <img
                src="https://lucknowrecreation.com/wp-content/uploads/2018/04/Monthly-Website-Header-background-e1522931579825.jpg"
                alt="Picture"/>
        </div>
    )
}

export default CoverPicture;