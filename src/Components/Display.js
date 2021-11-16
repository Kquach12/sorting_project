import React, {useState} from 'react'




const Display = (props) => {
    const [testArray,setTestArray] = useState([5,2,10,15,20,4,1])

    const insertionSort = (array)=> {
        // console.log(array)
        for (let i = 1; i < array.length; i++){
            let j = i
            while (j > 0 && array[j] < array[j-1]){
                swap (j, j-1, array)
                j-=1
            }
        }
        console.log(testArray)

        setTestArray(array)
        console.log(testArray)
    }

    function swap(i, j, array){
        const temp = array[j]
        array[j] = array[i]
        array[i] = temp
    }

    let testArrayCopy = [...testArray]

    console.log(testArray)
    return(
        <div>
            <button onClick={(e)=>insertionSort(testArrayCopy)}>Sort</button>
            {
                testArray.map((value) => <p>{value}</p>) 
            }
        </div>
    )
}

export default Display