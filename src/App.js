import Display from './Components/Display';
import SortButton from './Components/SortButton';


import {useState} from 'react'
import './App.css';

function App() {

  const [array, setArray] = useState([])
  const [isStarting, setIsStarting] = useState()

  const [sortAlgo, setSortAlgo] = useState("")

  const generateArray = ()=>{
    setArray(Array.from({length: 10}, () => Math.floor(Math.random() * 50 + 1)))
    console.log(array)
  }

  const useSortAlgoFunction = (e)=>{
    setSortAlgo(e)
    console.log(sortAlgo)
  }

  const start = () =>{
    setIsStarting(true)
  }

  const setStartingToFalse = () =>{
    setIsStarting(false)
    console.log(isStarting)
  }

  return (
    <div className="App">
      <nav className="navbar">
        <button onClick={generateArray} className="sortButton">Generate Array</button>
        <div className='sortButtonsDiv'>
          <SortButton sortingAlgo="Insertion" successCallBack={useSortAlgoFunction} />
          <SortButton sortingAlgo="Bubble" successCallBack={useSortAlgoFunction}/>
          <SortButton sortingAlgo="Selection" successCallBack={useSortAlgoFunction}/>
          {/* {
            sortAlgo == "quick"?
            <button onClick={useSortAlgoFunction} value="quick" className="sortChoice" style={{backgroundColor:"rgb(173, 173, 173)"}}>Quick Sort</button>:
            <button onClick={useSortAlgoFunction} value="quick" className="sortChoice" >Quick Sort</button >
          } */}
        </div>
        <button onClick={start} className="sortButton">Sort!</button>
      </nav>
      <Display sortingAlgo = {sortAlgo} array = {array} start = {isStarting} finishSort={setStartingToFalse}/>
    </div>
  );
}

export default App;
