import Display from './Components/Display';
import Navbar from './Components/Navbar';
import InsertionSort from './Components/InsertionSort';

import {useState} from 'react'
import './App.css';

function App() {

  const [array, setArray] = useState([])

  const [sortAlgo, setSortAlgo] = useState("")

  const generateArray = ()=>{
    setArray(Array.from({length: 30}, () => Math.floor(Math.random() * 50 + 1)))
    console.log(array)
  }

  const useSortAlgoFunction = (e)=>{
    setSortAlgo(e.target.value)
    console.log(sortAlgo)
  }
  

  return (
    <div className="App">
      <nav className="navbar">
        <button onClick={generateArray}>Generate Array</button>
        <div >
          <button onClick={useSortAlgoFunction} value="Insertion" className="sortChoice">Insertion Sort</button>
          <button onClick={useSortAlgoFunction} value="Bubble" className="sortChoice">Bubble Sort</button>
          <button onClick={useSortAlgoFunction} value="Selection" className="sortChoice">Selection Sort</button>
        </div>
        <h3>Selected Sort: {sortAlgo}</h3>
      </nav>
      {/* <Navbar useSortAlgo = {useSortAlgoFunction}/> */}
      <Display sortingAlgo = {sortAlgo} array = {array}/>
      <InsertionSort/>
    </div>
  );
}

export default App;
