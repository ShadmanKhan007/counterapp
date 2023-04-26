import {useState} from 'react';
import './counterapp.css';

export default function CounterApp() {
  const [count, updateCount] = useState(0);

    function increaseNum() {
       updateCount(count + 1)
    }

    function decreaseNum() {
        if(count === 0) {
            alert('Does not go below zero');
            updateCount(0)
        }
        else {
            updateCount(count - 1)
        }
      
    }


  return (
    <>
    <h1>{count}</h1>

    <div class="btn">
    <button onClick={increaseNum} class="btn-1">Increase</button>
    <button onClick={decreaseNum} class="btn-2">Decrease</button>
    </div>


    </>
  )
}