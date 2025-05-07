import {CDN_URL} from "./utils/constants";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {CloudinaryImageId,name,cuisine, rating, deliveryTime}=resData;

    return(
        <div className="res-card">
            <img className="res-logo" src={CDN_URL+CloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisine.join(", ")}</h4>
            <h4>{rating} stars</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;