import React from "react";

class UserClass extends React.Component{
    // So Here, firstly the constructor will be called, then render will be called and then componentDidMount will be called and componentDidMount will be called once the component is completely mounted

    constructor(props){
        super(props);

        this.state={
            // count: 0,
            // count2: 2,

            userInfo: {
                name: 'Dummy',
                location: 'Default',
            }
        }

        console.log(this.props.name+ "Child Constructor");
    }

    // ComponentDidMount is used to make the Api Calls
    async componentDidMount(){
        console.log(this.props.name+ "Child Component Did Mount");

        // Now we will make an api call
        const data=await fetch('https://api.github.com/users/akshaymarch7');
        const json=await data.json();
        console.log(json);

        this.setState({
            userInfo: json,
        })

    }

    // Component Did Update
    componentDidUpdate(){
        console.log("Component Did Updated is called");
    }

    // Component will Unmount phase
    componentWillUnmount(){
        console.log("Component will Unmount is called");
    }

    // Class based component is a class which includes a render method will return a piece of jsx
    render(){
        const {name,location}=this.props;
        // const {count, count2}=this.state;

        // console.log(this.props.name+ "Child Render");

        return(
            <div className='user-card'>
                {/* <h1>Count= {count}</h1>
                <button className='class-btn' onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                    });
                }}>Count Increase</button> */}

                {/* <h1>Count2= {count2}</h1> */}

                {/* <h2>Name: {name}</h2>
                <h3>Location: {location}</h3> */}

                <img src={this.state.userInfo.avatar_url} />
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
                <h4>Contact: @akshaymarch7</h4>
            </div>
        )
    }
}

// cycle-
// 1- Mounting phase-
// Constructor is called 
// Component gets rendered
// Now the web page loaded and component has dummy data
// Component Did Mount is called
// Inside Component Did Mount, An Api is called

// 2- Update phase-
// After that we do this.setState 
// set State Render Method is called 
// This Render method is happen with Api Data 
// Now Web page is loaded with new Api Data 
// It will call component Did Update

// 3- Unmounting phase-
// When the component will be removed from the web page 
// It will be removed when we go to the new page

export default UserClass;