import React, { useEffect, useState } from 'react';



const SortButton = (props) => {
    const {sortingAlgo, successCallBack} = props;
    const [algo, setAlgo] = useState("")
    

    const updateStatus = e => {
        successCallBack(e.target.value)
    }

    return (
        <div>
                <button value={sortingAlgo} onClick={updateStatus} className="sortChoice">
                    {sortingAlgo}
                </button>
        </div>
    )
}
export default SortButton;