const RestaurantCard=(props)=>{
    const {resData}=props;
    const {CloudinaryImageId,name,cuisine, rating, deliveryTime}=resData;

    return(
        <div className="res-card">
            <img className="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${CloudinaryImageId}`}></img>
            <h3>{name}</h3>
            <h4>{cuisine.join(", ")}</h4>
            <h4>{rating} stars</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default RestaurantCard;