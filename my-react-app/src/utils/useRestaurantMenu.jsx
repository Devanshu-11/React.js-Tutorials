import {useEffect, useState} from "react";

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);

    // fetch the data
    const fetchMenu=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9271111&lng=77.626605&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        setResInfo(json.data);
        console.log(json);
    }

    useEffect(()=>{
        fetchMenu();
    },[]);

    return resInfo;
}

export default useRestaurantMenu;