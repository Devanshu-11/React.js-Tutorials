import {useState,useEffect} from "react";
import Shimmer from "./Shimmer.jsx";
import {useParams} from "react-router-dom";

const RestaurantMenu=()=>{
    const [resInfo, setResInfo]=useState(null);
    const {resId}=useParams();

    const fetchMenu=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9271111&lng=77.626605&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        setResInfo(json.data);
        console.log(json);
    }

    useEffect(()=>{
        fetchMenu();
    },[]);

    if(resInfo===null){
        return <Shimmer />
    }

    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return(
        <div className="menu">
            <h2>{resInfo?.cards[2]?.card?.card?.info?.name}</h2>

            <br></br>
            <h3>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h3>

            <br></br>
            <h3>{resInfo?.cards[2]?.card?.card?.info?.costForTwo}</h3>

            <br></br>
            <h2>Menu</h2>
            <br></br>
            <ul>
                {itemCards.map((item)=>(
                    <li key={item?.card?.info?.id}>{item?.card?.info?.name}- Rs. {item?.card?.info?.price/100}</li>
                ))}

                {/* <li>{itemCards[0]?.card?.info?.name}</li>
                <li>{itemCards[1]?.card?.info?.name}</li> */}
            </ul>
        </div>
    )
}

export default RestaurantMenu;