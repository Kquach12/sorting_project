import Display from './Components/Display';
import Navbar from './Components/Navbar';
import InsertionSort from './Components/InsertionSort';

import {useState} from 'react'
import './App.css';

function App() {

  const [sortAlgo, setSortAlgo] = useState("")

  const useSortAlgoFunction = (e)=>{
    
    setSortAlgo(e.target.value)
    console.log(sortAlgo)
  }
  

  return (
    <div className="App">
      <nav>
        <div>
          <button onClick={useSortAlgoFunction} value="insertionSort">Insertion Sort</button>
          <button onClick={useSortAlgoFunction} value="bubbleSort">Bubble Sort</button>
        </div>
        <h3>Selected Sort: {sortAlgo}</h3>
      </nav>
      {/* <Navbar useSortAlgo = {useSortAlgoFunction}/> */}
      <Display sortingAlgo = {sortAlgo}/>
      <InsertionSort/>
    </div>
  );
}

export default App;
