import style from "../Users/Users.module.css";
import React from "react";
import {useState} from "react";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    return (
        <div className={style.pagesContainer}>
            {portionNumber > 1 && <button  onClick={() => {setPortionNumber(portionNumber - 1)}}>Prev</button>}
            {pages
                .filter(portion => portion >= leftPortionPageNumber && portion <= rightPortionPageNumber)
                .map((page) => {
                return <span key={page} onClick={(event) => {onPageChanged(page)}}
                             className={currentPage === page ? style.selectedPage : ''}>{page}</span>
            })}

            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button>}
        </div>
    )
}

export default Paginator