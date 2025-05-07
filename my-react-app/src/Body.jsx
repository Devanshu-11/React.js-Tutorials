import RestaurantCard from './RestaurantCard.jsx';
import reslist from './utils/mockData.js';
import {useState} from 'react';

const Body=()=>{
    const [listOfRestaurants, setListOfRestaurants]=useState(reslist);

    return(
        <div className="body">

            <div className="filter">
                <button className='filter-btn' onClick={()=>{
                    // filter logic
                    const filteredList=listOfRestaurants.filter((res)=>res.rating>=4)
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>

            <div className="res-container">

                {/* Passing the props to the component */}
                {/* <RestaurantCard resData={reslist[0]}/>
                <RestaurantCard resData={reslist[1]}/>
                <RestaurantCard resData={reslist[2]}/>
                <RestaurantCard resData={reslist[3]}/>
                <RestaurantCard resData={reslist[4]}/>
                <RestaurantCard resData={reslist[5]}/>
                <RestaurantCard resData={reslist[6]}/> */}

                {/* We will make it dynamic by using Map function */}
                {/* Here we use key to map to avoid unexpected behaviour of rendering */}
                {
                    listOfRestaurants.map((restaurant)=><RestaurantCard key={restaurant.id} resData={restaurant}/>)
                }


                {/* <RestaurantCard 
                    image="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    resName="Meghna Foods" 
                    cuisine="Rajma, Chole Puri"
                    rating="4.4 stars"
                    time="34 Minutes"
                /> */}

                {/* <RestaurantCard 
                    image="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    resName="Sunny Foods" 
                    cuisine="Burger, Fast Food"
                    rating="4.2 stars"
                    time="22 Minutes"
                /> */}
            </div>

        </div>
    )
}

export default Body;