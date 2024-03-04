// useState:

// 1. useState is a basic React hook used to manage state in functional components.
// 2. It is the simplest way to add state to a functional component.
//3.  It takes an initial state as an argument and returns an array with the current state
//  value and a function to update that state.
// 4. useState is typically used for managing independent or simple state values,
//  such as a boolean flag, a string, or a number.


// useReducer:

// 1. useReducer is a more advanced React hook used for managing 
// complex state logic in functional components.

// 2. It is inspired by Redux's reducer pattern and provides 
// a way to update state based on dispatched actions.

// 3. It takes a reducer function and an initial state as arguments and 
// returns an array with the current state value and a dispatch function
//  to dispatch actions to the reducer.

// 4. useReducer is useful when you have state transitions that depend 
// on the previous state or when you have multiple sub-values in the 
// state that need to be updated together.

// 5. useReducer is typically used for managing complex state logic, 
// state transitions, or state objects with multiple fields.


import React,{useReducer} from 'react'

const initialState={
    count:0
}

const reducer=(state,action)=>{

    switch(action.type){
        case 'increment':
            return {...state,count:state.count+1};
        case 'decrement':
            return {...state,count:state.count-1};
        case 'reset':
            return initialState
        default:
            return state
    }
}

export default function CountComponent() {

    const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <div>
   
    <br />
    Counter: {state.count}
    <br />
    <button onClick={()=>dispatch({'type':'increment'})}>Increment</button>{" "}
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={()=>dispatch({'type':'decrement'})}>Decrement</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={()=>dispatch({'type':'reset'})}>Reset</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </div>
  )
}


