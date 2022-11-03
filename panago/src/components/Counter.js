import {useState} from 'react';

function Counter(){
    const [amountOfClicks, setAmountOfClicks] = useState(0)
    // const clickState = useState(0)
    // console.log(clickState)
    //Getter
    // const amountOfClicks = clickState[0]
    //Setter
    // const setAmountOfClicks = clickState[1]
    //1
    return (
        <div>
            <h2>Counter: {amountOfClicks}</h2>
            <button onClick={()=>{setAmountOfClicks((prev)=>prev + 1)}}>Click me!</button>
        </div>
    );
}

export default Counter;