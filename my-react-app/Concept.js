// Functional Component-
// A Functional Component in a reactJs is a javascript function which returns jsx to render the Ui Elements

// 2 types of export-
// 1-Default export- To export the component 
// 2-Named export- if in a single File, we need to export various components or variables

// Props-
// Props means Properties and it this, we basically pass data from the parent component to child component and it simply like passing an argument to a function

// useState Hook- When a state variable changes, react will re-render my component
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

// MonoLith Architecture-
// It is a single unified unit, means all the functionality of application (eg- user interface, business logic) is tightly integrated and runs as a single service

// Microservice Architecture-
// It breaks the application into smaller, independent services. Here Each service communicate with each other via api and it follows a single responsibility principle where each service has its own job

// useEffect Hook- It basically allows us to perform the side effects in the components
// Some of the side Effects are- fetching data etc 
// It has 2 arguments in which the 1st argument is a callback function and 2nd argument is dependency array

// Shimmer Ui- It basically refers to the concept of displaying a skeleton screen or placeholder layout while the actual data is being fetched
// It is used in mobile and web development to improve user experience during data loading

// We should not use a tag in reactJs because the whole page gets reload
// instead of a tag, we should use link component
// Reactjs is a single page application because there is only page and when we do routing, instead of reloading the whole page, it just interchange the components 

// There are 2 types of routing-
// 1- client side routing 
// 2- server side routing

// phase of react Life cycle-
// 1- Mounting phase- A component is created and it is inserted into the dom 
// 2- Updating phase- A component is re-rendered due to changes in props or state 
// 3- Unmounting phase- A component is removed from the dom

// Single Responsibility Principle-
// It states that the each component should only have a single principle

// Modularity-
// We should always break down the code into small small modules so that code becomes more maintainable and more readable