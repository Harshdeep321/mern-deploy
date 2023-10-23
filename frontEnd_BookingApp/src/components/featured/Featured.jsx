import useFetch from "../../hooks/useFetch.js";
import { useNavigate } from "react-router-dom";
import "./featured.css";

function Featured() {

    const { data, loading, error } = useFetch("/hotels/countByCity?cities=berlin,madrid,london")
    const navigate = useNavigate();
    return (
        <div className="featured">
            {loading ? ("Loading please wait..."
            ) : (
                <>
                    <div className="featuredItem">
                        <img className="featuredImage" src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt=""/>
                        <div className="featuredTitles">
                            <h1>Berlin</h1>
                            <h2>{data[0]}</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img className="featuredImage" src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt=""/>
                        <div className="featuredTitles">
                            <h1>Madrid</h1>
                            <h2>{data[1]}</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img className="featuredImage" src="https://cf.bstatic.com/xdata/images/city/600x600/684653.jpg?k=306ccafcc8a4a7e23b9e8a05b183453fe885b312a4daa5ce76ec39a1b79cbc6f&o=" alt=""/>
                        <div className="featuredTitles">
                            <h1>London</h1>
                            <h2>{data[2]}</h2>
                        </div>
                    </div></>)}
        </div>
    )
}

export default Featured;