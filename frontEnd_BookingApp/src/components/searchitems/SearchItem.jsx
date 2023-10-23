import { Link } from "react-router-dom";
import "./searchItem.css";

function SearchItem({item}){
    return(
        <div className="searchItem">
            <img 
            src={item.photos[0]}
            className="searchImage"/>

            <div className="searchDesc">
                <h1 className="searchTitle">{item.name}</h1>
                <span className="searchDistance">{item.distance}</span>
                <span className="searchSubtitle">
                    Studio Apartment with Air Conditioning
                </span>
                <span className="searchFeatures">
                    {item.desc}
                </span>
                <span className="searchCancelOp">Free cancellation</span>
                <span className="searchCancelOpSubtitle">
                    You can cancle later , so lock in this great price today!
                </span>
            </div>
            <div className="searchDetails">
             {item.rating && <div className="searchRating">
                <span>Excellent</span>
                <button>{item.rating}</button>
              </div>}
            <div className="searchDetailTexts">
                <span className="searchPrice">${item.cheapestPrice}</span>
                <span className="searchTaxOp">Includes taxes and fees</span>
                <Link to={`/hotels/${item._id}`}>
                   <button className="searchCheckBtn">See avaibility</button>
                </Link>
            </div>
            </div>
        </div>
    )
}

export default SearchItem;