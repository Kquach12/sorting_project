import React, {useEffect, useState} from 'react'




const Display = (props) => {
    const {sortingAlgo, array, start, finishSort} = props
    
    
    const [testArray,setTestArray] = useState([])
    const [selectedValue, setSelectedValue] = useState()
    const [willStart, setWillStart] = useState()
    
    
    useEffect (()=>
        setTestArray([...array]), 
        [array]
    )
    // useEffect (()=>
    //     setWillStart(start), 
    //     [start]
    // )

    useEffect (()=>
        selection([...testArray]), 
        [start]
    )
    
    let delay = 150
    
    const selection = (array) =>{
        setWillStart(false)
        if (sortingAlgo == "Insertion"){
            insertionSort(array)
        }
        else if (sortingAlgo == "Bubble"){
            bubbleSort(array)
        }
        else if (sortingAlgo == "Selection"){
            selectionSort(array)
        }
        // else if (sortingAlgo == "quick"){
        //     quickSort(array)
        // }
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
                await timer(delay)
            }
            setTestArray([...array])
            await timer(delay)
        }
        setSelectedValue("")
        finishSort()
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
                await timer(delay)
                if (array[i] > array[i+1]) {
                    swap (i, i+1, array)
                    isSorted = false
                }
			}
            counter++
		}
        setTestArray([...array])
        setSelectedValue("")
        finishSort()
    }


    const selectionSort= async (array) => {
        for (let i = 0; i < array.length; i++){
            let lowest = i 
            let needsSort = false
            for (let j = i+1; j < array.length; j++){
                setSelectedValue(j)
                setTestArray([...array])
                await timer(delay)
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
        finishSort()
    }



    // function quickSort(array) {
    //     quickSortHelper(array, 0, array.length - 1)
    //     // await timer(200)
    //     setTestArray([...array])
    // }
    
    // async function quickSortHelper(array, start, end){


    //     if (start >= end){
    //         setSelectedValue("")
    //         setSelectedValue2("")
    //         setSelectedValue3("")
    //         setTestArray([...array]) 
    //         return
    //     }
    //     const pivot = start
    //     let left = start + 1
    //     let right = end

    //     while (right >= left){
    //         setSelectedValue(left)
    //         setSelectedValue2(right)
    //         setSelectedValue3(pivot)
    //         setTestArray([...array])
    //         await timer(delay)
    //         if (array[left] > array[pivot] && array[right] < array[pivot]){
    //             swap(left, right, array)
    //         }
    //         if (array[left] <= array[pivot]){
    //             left++
    //         }
    //         if (array[right] >= array[pivot]){
    //             right--
    //         }
    //     }
    //     swap(pivot, right, array)
    //     const leftSubarrayIsSmaller = right - 1 - start < end - (right+1)
    //     if (leftSubarrayIsSmaller){
    //         quickSortHelper(array, start, right - 1)
    //         quickSortHelper(array, right+1, end) 
    //     } else{
    //         quickSortHelper(array, right + 1, end)
    //         quickSortHelper(array, start, right - 1)
    //     }
    // }


    //**********************************SORTING ALGOS*********************************************/


    return(
        <div>
            {
                testArray.map((value, index) =>
                
                    index === selectedValue  ?
                        <div key = {index} style={{
                            height: `10px`,
                            width:`${value * 10}px`,
                            backgroundColor: "gold",
                            margin:"5px",
                            borderRadius: "25px"
                        }}></div>
                            :<div key = {index} style={{
                                height: `10px`,
                                width:`${value * 10}px`,
                                backgroundColor: "blue",
                                margin:"5px",
                                borderRadius: "25px"
                            }}></div>
                    
                
                ) 
            }
        </div>
    )
}

export default Display