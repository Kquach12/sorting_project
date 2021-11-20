import React, {useState} from 'react'

const InsertionSort = (props) =>{

    const [testArray,setTestArray] = useState([5,2,12,15,20,4,3,15,40,45,23,10,37,3,7,9,35,3,45,10])


    const timer = ms => new Promise(res => setTimeout(res, ms))

    const [selectedValue, setSelectedValue] = useState()

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
                await timer(300)
            }
            setTestArray([...array])
            await timer(300)
        }
    }

    function swap(i, j, array){
        const temp = array[j]
        array[j] = array[i]
        array[i] = temp
    }
    return(
        null
    )
}

export default InsertionSort