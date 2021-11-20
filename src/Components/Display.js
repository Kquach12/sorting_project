import React, {useState} from 'react'




const Display = (props) => {
    const [testArray,setTestArray] = useState([5,2,12,15,20,4,3,15,40,45,23,10,37,3,7,9,35,3,45,10])
    const [selectedValue, setSelectedValue] = useState()

    const sortingAlgo = props.sortingAlgo

    const selection = (array) =>{
        if (sortingAlgo == "insertionSort"){
            insertionSort(array)
        }
        else if (sortingAlgo == "bubbleSort"){
            bubbleSort(array)
        }
    }

    const timer = ms => new Promise(res => setTimeout(res, ms))
    
    async function insertionSort(array) {
        
        for (let i = 1; i < array.length; i++){
            let j = i
            setSelectedValue(j)
            console.log(selectedValue)
            while (j > 0 && array[j] < array[j-1]){
                swap (j, j-1, array)
                j-=1
                setSelectedValue(j)
                setTestArray([...array])
                await timer(100)
            }
            setTestArray([...array])
            await timer(100)
        }
    }

    function swap(i, j, array){
        const temp = array[j]
        array[j] = array[i]
        array[i] = temp
    }


    async function bubbleSort(array){
        let isSorted = false
        let counter = 0
        while (!isSorted) {
            isSorted = true
            for (let i = 0; i < array.length - 1 - counter; i++){
                setSelectedValue(i)
                setTestArray([...array])
                await timer(300)
                if (array[i] > array[i+1]) {
                    swap (i, i+1, array)
                    isSorted = false
                }
			}
            counter++
		}
        setTestArray([...array])
    }


    return(
        <div>
            <button onClick={(e)=>selection([...testArray])}>Sort</button>
            {
                testArray.map((value, index) =>
                
                    index === selectedValue ?
                        <div key = {index} style={{
                            height: `20px`,
                            width:`${value * 10}px`,
                            backgroundColor: "red",
                            margin:"5px"
                        }}></div>
                    
                    :
                        <div key = {index} style={{
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