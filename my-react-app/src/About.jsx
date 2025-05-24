import React from "react";
import User from './User.jsx';
import UserClass from './UserClass.jsx';

class About extends React.Component{
    constructor(props){
        super(props);

        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Component Did Mount");
    }

    render(){
        console.log("Parent Render");

        return(
            <div>
                <h1>This is about Class Component</h1>
                <h2>This is Namaste React series</h2>
                {/* <User name={"Akshay Saini (Function)"} /> */}

                <UserClass name={"Akshay Saini (class)"} location={'India (class)'}/>
                {/* <UserClass name={"Elon Musk (class)"} location={'Usa (class)'}/> */}
            </div>
        )   
    }
}

// const About=()=>{
//     return(
//         <div>
//             <h1>This is about page</h1>
//             <h2>This is Namaste React series</h2>
//             {/* <User name={"Akshay Saini (Function)"} /> */}

//             <UserClass name={"Akshay Saini (class)"} location={'India (class)'}/>
//         </div>
//     )
// };

// In this case, this is workflow
// Parent Constructor
// Parent Render 
// Akshay Constructor 
// Akshay Render
// Elon Musk Constructor
// Elon Musk Render
// Akshay Component Did Mount 
// Elon Musk Component Did Mount 
// Parent Component Did Mount

// So in this, react also has 2 phases
// 1- Commit Phase 
// 2- Render Phase 

// 1- Render Phase
// firstly the constructor is called
// Then render is called 

// 2- Commit Phase
// Then react updates the Dom and when dom gets updated 
// Component Did Mount is called and that is why it is best place to use Api call  

export default About;