import { useState } from "react"; //For importing useState() function

// A component's state can change over time; whenever it changes, the component re-renders
// The state is a built-in object that is used to contain data or information about the component
// It means when any change in variable occurs and we want to render it on the screen, then the Counter function will re-execute and the updated value will be rendered in the screen

// Ager React version a component class akare lekha hoto jekhane kisu feature silo
// Hooks let you use state and other React features without writing a class
// functional component er vitorei hooks use kore class er feature gula use kora jay

// useState() (can check in react.dev documentation) -> a React hook that lets u add a state variable to your component

function init(){
  return Math.random()*10;
}

export default function Counter() {
  let arr = useState(init); //initialization er somoy function call na kore address pass kore deya lagbe.Run time onek fast hobe then
  // console.log(arr);

  // let [stateVariable, setStateVariable] = arr; //deconstructing the returned array containing 2 elements
  let [count, setCount] = arr; //initialization line(ai line bade baki full function re-execute hoy re-render korar jonno updated value)

  function incCount() {
    // increase count render stage a update hoy a jonno 1 difference thake display Count er sathe
    setCount(count + 1); //this setCount method triggers the re-rendering of new count
  }

  let [count1, setCount1] = useState(0);

  function incCount1() {
    //using this we can update counter based on current count
    //will update by 3

    // state er value update holei kebol re-render hobe
    // otherwise react re-render korbena

    setCount1((currCount) => {
      return currCount + 1;
    });
    setCount1((currCount) => {
      return currCount + 1;
    });
    setCount1((currCount) => {
      return currCount + 1;
    });
  }
  return (
    <div>
      <h3>Count ={count} </h3>
      <button onClick={incCount}>Increase Count</button>
      <hr />
      <h3>Count using updater functions = {count1} </h3>
      <button onClick={incCount1}>Increase Count1</button>
    </div>
  );
}
