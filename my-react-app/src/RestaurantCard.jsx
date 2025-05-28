import {CDN_URL} from "./utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;

    return(
        <div className="res-card m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 rounded-lg">
            <img className="res-logo rounded-lg" src={CDN_URL+resData?.info?.cloudinaryImageId}></img>
            <h3 className="font-bold py-4 text-lg">{resData?.info?.name}</h3>
            <h4>{resData?.info?.cuisines?.join(', ')}</h4>
            <h4>{resData?.info?.avgRating} stars</h4>
            <h4>{resData?.info?.sla.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;