import Display from './Components/Display';
import SortButton from './Components/SortButton';


import {useState} from 'react'
import './App.css';

function App() {

  const [array, setArray] = useState([])
  const [isStarting, setIsStarting] = useState()

  const [sortAlgo, setSortAlgo] = useState("")

  const generateArray = ()=>{
    setArray(Array.from({length: 30}, () => Math.floor(Math.random() * 50 + 1)))
    setIsStarting(false)
    console.log(array)
  }

  const useSortAlgoFunction = (e)=>{
    setIsStarting(false)
    setSortAlgo(e)
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
          <SortButton sortingAlgo="insertion" successCallBack={useSortAlgoFunction}/>
          <SortButton sortingAlgo="bubble" successCallBack={useSortAlgoFunction}/>
          <SortButton sortingAlgo="selection" successCallBack={useSortAlgoFunction}/>
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
