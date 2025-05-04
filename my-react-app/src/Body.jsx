import RestaurantCard from './RestaurantCard.jsx';

const reslist=[
    {
        id: "1001",
        name : "Santosh Family Dhaba",
        cuisine: ["North Indian", "South Indian", "Chinese"],
        rating: "4.0",
        price : "₹300 for two",
        deliveryTime: "22 Minutes",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/mkcibe6x1ychvzjkywxk",
        CloudinaryImageId:"mkcibe6x1ychvzjkywxk"
    },
    {
        id: "1002",
        name : "Cafe Niloufer",
        cuisine: ["Snacks", "Tea", "Bakery"],
        rating: "4.5",
        price : "₹400 for two",
        deliveryTime: "32 Minutes",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dc9t0kiq7lhsd3pndohf",
        CloudinaryImageId:"dc9t0kiq7lhsd3pndohf"
    },
    {
        id: "1003",
        name : "Santosh Family Dhaba",
        cuisine: ["Andhra", "Biryani", "Veg Curries"],
        rating: "4.5",
        price : "₹560 for two",
        deliveryTime: "32 Minutes",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dwqb8nhiop8fvqya0alq",
        CloudinaryImageId:"dwqb8nhiop8fvqya0alq"
    },
    {
        id: "1004",
        name : "Grameen Kulfi",
        cuisine: ["Desserts", "Kulfi", "Ice Cream"],
        rating: "4.6",
        price : "₹120 for two",
        deliveryTime: "18 Minutes",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vu0thsifji9wgfuzfmic",
        CloudinaryImageId:"vu0thsifji9wgfuzfmic"
    },
    {
        id: "1005",
        name : "Nrs Nandini",
        cuisine: ["South Indian", "Breakfast", "Tiffins"],
        rating: "4.4",
        price : "₹150 for two",
        deliveryTime: "21 Minutes",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/9fa5ca30c3db622c69cec0326ff63b41",
        CloudinaryImageId:"9fa5ca30c3db622c69cec0326ff63b41"
    },
    {
        id: "1006",
        name : "Utsav Vegetarian",
        cuisine: ["Hyderabadi", "Paneer", "Biryani"],
        rating: "4.1",
        price : "₹300 for two",
        deliveryTime: "32 Minutes",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/y2lkcxxax3794vepe2se",
        CloudinaryImageId:"y2lkcxxax3794vepe2se"
    },
    {
        id: "1007",
        name : "Subbayya Gari Hotel",
        cuisine: ["Thali", "Rice", "Pickles"],
        rating: "4.0",
        price : "₹300 for two",
        deliveryTime: "24 Minutes",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iwtocxqjtu57vc7l52h9",
        CloudinaryImageId:"iwtocxqjtu57vc7l52h9"
    },
];
  
const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
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
                    reslist.map((restaurant)=><RestaurantCard key={restaurant.id} resData={restaurant}/>)
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