// Functional Component-
// A Functional Component in a reactJs is a javascript function which returns jsx to render the Ui Elements

// 2 types of export-
// 1-Default export- To export the component 
// 2-Named export- if in a single File, we need to export various components or variables

// Props-
// Props means Properties and it this, we basically pass data from the parent component to child component and it simply like passing an argument to a function

// Use State Hook- When a state variable changes, react will re-render my component
// It helps to keep track of the state in a function component 
// it basically returns 2 values-
// 1- Initial State 
// 2- A function that updates the state 

// Reconciliation Algorithm-(React Fibre)-
// Virtual Dom- It is actual representation of real dom
// 1- When we write the Jsx component,react creates a virtual dom which is actual representation of real dom
// 2-It do not directly interact with the browser dom on every update
// 3- When we make changes, it creates a virtual dom of it and compare it with the previous virtual dom using a process called diffing
// 4- If it see that there is some changes occurs in it, it modifies only that changed part in the real dom