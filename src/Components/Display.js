import React, {useState} from 'react'




const Display = (props) => {
    const [testArray,setTestArray] = useState([5,2,10,15,20,4,1,15,40,45,23,10,37,3,7,9,35,3,45])

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
                testArray.map((value) => 
                    <div style={{
                        height: `20px`,
                        width:`${value * 10}px`,
                        backgroundColor: "blue",
                        margin:"5px"
                    }}></div>
                ) 
            }
        </div>
    )
}

export default Display