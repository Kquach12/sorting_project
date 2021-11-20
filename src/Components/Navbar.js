import React, {useState} from 'react'

const Navbar = (props) => {
    const [sortAlgo, setSortAlgo] = useState("")
    
    const handleSelection = (e) =>{
        setSortAlgo(e.target.value)
        props.useSortAlgo(sortAlgo)
        console.log(sortAlgo)
    }

    return (
        <nav>
            <div>
                <button onClick={handleSelection} value="insertionSort">Insertion Sort</button>
            </div>
        </nav>
    )
}

export default Navbar