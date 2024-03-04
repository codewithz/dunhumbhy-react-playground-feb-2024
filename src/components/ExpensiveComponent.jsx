import React, { useState, useMemo } from 'react';

const ExpensiveComponent = () => {
  // State to hold the input value
  const [inputValue, setInputValue] = useState('');
  
  // Function to simulate an expensive computation
  const computeExpensiveValue = (input) => {
    console.log('Computing expensive value...');
    // Simulating an expensive computation by repeating the input string multiple times
    return input.repeat(100000);
  };
  
  // Memoized expensive value
  const memoizedValue = useMemo(() => computeExpensiveValue(inputValue), [inputValue]);
  
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter text..."
      />
      <p>Computed value: {memoizedValue}</p>
    </div>
  );
};

export default ExpensiveComponent;


// 
// Memoizing is an optimization technique used to 
// improve the performance of functions by caching the 
// results of expensive function calls and returning the cached result 
// when the same inputs occur again. In other words, 
// memoization stores the output of a function based on its input arguments 
// so that the function doesn't have to recompute the result every time it's 
// called with the same inputs.

// Here's a simple explanation of how memoization works:

// Function Call with Inputs:
// When a function is called with a set of input arguments,
//  the function checks if it has already computed and stored 
// the result for those inputs.

// Cache Lookup:
// If the function has previously computed the result for the same inputs, 
// it retrieves the cached result from memory without re-executing the function.
// 

// Computing and Storing Result:
// If the function hasn't computed the result for the current inputs before,
//  it performs the expensive computation and stores the result in a 
// cache associated with those inputs.


// Returning Result:
// Finally, the function returns the computed result to the caller.

// Memoization is particularly useful for optimizing functions that are 
// computationally expensive or called frequently with the same inputs.
//  By caching the results of previous computations,
//  memoization reduces redundant calculations and 
// improves the overall performance of the application.


// Where to use 

// Data Transformations:
// If you're transforming data or computing derived 
// values from props or state, you can use useMemo to memoize the result. 
// This is useful when the transformation is computationally expensive
//  or depends on the same inputs frequently.

// Filtering or Sorting Data:
// When working with large datasets and performing 
// filtering or sorting operations, 
// useMemo can help avoid recalculating the 
// filtered or sorted data on every render. 
// Memoizing these operations can improve performance, especially 
// in components that render frequently.

// Conditional Rendering Logic:
// If your component has conditional rendering logic based on props or state, 
// you can use useMemo to memoize the conditions. 
// This ensures that the conditions are evaluated
//  only when the relevant dependencies change, preventing unnecessary recalculations.

// Callback Functions:
// When passing callback functions as props to child 
// components, you can use useMemo to memoize the callback functions.
//  This prevents unnecessary re-renders of child components when the
//   parent component re-renders due to changes in other state or props.

// API Requests or Fetching Data:
// If you're fetching data from an API or performing
//  asynchronous operations, you can use useMemo to memoize 
//  the fetched data or the result of asynchronous operations. 
//  This can prevent unnecessary re-fetching or re-execution of 
//  async operations on every render.

// Memoizing Expensive Components:
// In cases where you have complex or expensive child components,
//  you can use useMemo to memoize the creation of these components. 
//  This ensures that the components are re-rendered only when their
//   dependencies change, rather than on every render of the parent component.

