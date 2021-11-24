import React, {useEffect, useState} from 'react'




const Display = (props) => {
    const {sortingAlgo, array, start} = props


    const [testArray,setTestArray] = useState([])
    const [selectedValue, setSelectedValue] = useState()
    const [willStart, setWillStart] = useState()
    
    
    useEffect (()=>
        setTestArray([...array]), 
        [array]
    )
    useEffect (()=>
        setWillStart(start), 
        [start]
    )

    let delay = 50

    const selection = (array) =>{
        setWillStart(false)
        if (sortingAlgo == "insertion"){
            insertionSort(array)
        }
        else if (sortingAlgo == "bubble"){
            bubbleSort(array)
        }
        else if (sortingAlgo == "selection"){
            selectionSort(array)
        }
        console.log(array)
    }

    //**********************************SORTING ALGOS*********************************************/

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
                await timer(50)
            }
            setTestArray([...array])
            await timer(50)
        }
        setSelectedValue("")
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
                await timer(50)
                if (array[i] > array[i+1]) {
                    swap (i, i+1, array)
                    isSorted = false
                }
			}
            counter++
		}
        setTestArray([...array])
        setSelectedValue("")
    }


    const selectionSort= async (array) => {
        for (let i = 0; i < array.length; i++){
            let lowest = i 
            let needsSort = false
            for (let j = i+1; j < array.length; j++){
                setSelectedValue(j)
                setTestArray([...array])
                await timer(50)
                if (array[j] < array[lowest]){
                    lowest = j
                    needsSort = true
                }
            }
            if (needsSort){
                swap(i, lowest, array)
            } 
        }
        setTestArray([...array])
        setSelectedValue("")
    }


    //**********************************SORTING ALGOS*********************************************/
    if (willStart){
        selection([...testArray])
    }

    return(
        <div>
            {/* <button onClick={(e)=>selection([...testArray])}>Sort</button> */}
            {
                testArray.map((value, index) =>
                
                    index === selectedValue ?
                        <div key = {index} style={{
                            height: `10px`,
                            width:`${value * 10}px`,
                            backgroundColor: "gold",
                            margin:"5px"
                        }}></div>
                    
                    :
                        <div key = {index} style={{
                            height: `10px`,
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