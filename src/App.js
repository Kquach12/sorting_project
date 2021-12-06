import Display from './Components/Display';
import Test from './Components/Test';

import {useState} from 'react'
import './App.css';

function App() {

  const [array, setArray] = useState([])
  const [isStarting, setIsStarting] = useState()

  const [sortAlgo, setSortAlgo] = useState("")

  const generateArray = ()=>{
    setArray(Array.from({length: 15}, () => Math.floor(Math.random() * 50 + 1)))
    setIsStarting(false)
    console.log(array)
  }

  const useSortAlgoFunction = (e)=>{
    setIsStarting(false)
    setSortAlgo(e.target.value)
    console.log(sortAlgo)
  }

  const start = () =>{
    setIsStarting(true)
    console.log(isStarting)
  }

  return (
    <div className="App">
      <nav className="navbar">
        <button onClick={generateArray} className="sortButton">Generate Array</button>
        <div >
          {
            sortAlgo == "insertion"?
            <button onClick={useSortAlgoFunction} value="insertion" className="sortChoice" style={{backgroundColor:"rgb(173, 173, 173)"}}>Insertion Sort</button>:
            <button onClick={useSortAlgoFunction} value="insertion" className="sortChoice" >Insertion Sort</button >
          }
          {
            sortAlgo == "bubble"?
            <button onClick={useSortAlgoFunction} value="bubble" className="sortChoice" style={{backgroundColor:"rgb(173, 173, 173)"}}>Bubble Sort</button>:
            <button onClick={useSortAlgoFunction} value="bubble" className="sortChoice" >Bubble Sort</button >
          }
          {
            sortAlgo == "selection"?
            <button onClick={useSortAlgoFunction} value="selection" className="sortChoice" style={{backgroundColor:"rgb(173, 173, 173)"}}>Selection Sort</button>:
            <button onClick={useSortAlgoFunction} value="selection" className="sortChoice" >Selection Sort</button >
          }
          {/* {
            sortAlgo == "quick"?
            <button onClick={useSortAlgoFunction} value="quick" className="sortChoice" style={{backgroundColor:"rgb(173, 173, 173)"}}>Quick Sort</button>:
            <button onClick={useSortAlgoFunction} value="quick" className="sortChoice" >Quick Sort</button >
          } */}
        </div>
        <button onClick={start} className="sortButton">Sort!</button>
      </nav>
      <Display sortingAlgo = {sortAlgo} array = {array} start = {isStarting}/>
    </div>
  );
}

export default App;
