import RestaurantCard from './RestaurantCard.jsx';
import reslist from './utils/mockData.js';
import {useState, useEffect} from 'react';
import Shimmer from './Shimmer.jsx';
import {Link} from 'react-router-dom';
import useOnlineStatus from './utils/useOnlineStatus.jsx';

const Body=()=>{
    // When a state variable changes, react triggers re-rendering of the component
    const [listOfRestaurants, setListOfRestaurants]=useState([]);
    const [filteredRestaurant, setFilteredRestaurant]=useState([]);
    const [searchText, setSearchText]=useState("");

    // Now we will fetch the data
    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        setListOfRestaurants(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // useEffect and it will be called after the component renders
    useEffect(()=>{
        console.log("useEffect is called");
        fetchData();
    },[]);
    
    const onlineStatus=useOnlineStatus();
    if(onlineStatus===false){
        return(
            <h1>You are Offline, Please Check your internet connection</h1>
        )
    }

    // Conditional Rendering- Rendering based on condition
    return listOfRestaurants.length===0? <Shimmer />: (
        <div className="body">

            <div className="filter flex">
                <div className='search m-4 p-4'>
                    <input type='text' className='search-box border border-solid border-black pl-2' placeholder="Enter your restaurant" value={searchText} onChange={(e)=>{
                        console.log(e.target.value);
                        setSearchText(e.target.value);
                    }}/>

                    <button className='search-btn px-4 py-2 bg-green-100 m-4 cursor-pointer rounded-lg' onClick={()=>{
                        // Filter the restaurant cards and update the UI
                        console.log(searchText);
                        const filteredRestaurant=listOfRestaurants.filter((res)=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant);

                    }}>Search</button>
                </div>

                <div className='m-4 p-4 flex items-center'>
                    <button className='filter-btn px-4 py-2 bg-green-100 cursor-pointer rounded-lg' onClick={()=>{
                        // filter logic
                        const filteredList=listOfRestaurants.filter((res)=>res?.info?.avgRating>=4.3)

                        // update it in set List of restaurants
                        setFilteredRestaurant(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>
            </div>

            <div className="res-container flex flex-wrap">

                {/* Passing the props to the component */}
                {/* <RestaurantCard resData={reslist[0]}/>
                <RestaurantCard resData={reslist[1]}/>
                <RestaurantCard resData={reslist[2]}/>`
                <RestaurantCard resData={reslist[3]}/>
                <RestaurantCard resData={reslist[4]}/>
                <RestaurantCard resData={reslist[5]}/>
                <RestaurantCard resData={reslist[6]}/> */}

                {/* We will make it dynamic by using Map function */}
                {/* Here we use key to map to avoid unexpected behaviour of rendering */}
                {
                    filteredRestaurant.map((restaurant)=>
                        <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}>
                            <RestaurantCard resData={restaurant}/>
                        </Link>
                    )
                }

                {/* <RestaurantCard 
                    image="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    name="Meghna Foods" 
                    cuisines="Rajma, Chole Puri"
                    avgRating="4.4 stars"
                    deliveryTime="34 Minutes"
                /> */}

                {/* <RestaurantCard 
                    image="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    name="Sunny Foods" 
                    cuisines="Burger, Fast Food"
                    avgRating="4.2 stars"
                    deliveryTime="22 Minutes"
                /> */}
            </div>

        </div>
    )
}

export default Body;