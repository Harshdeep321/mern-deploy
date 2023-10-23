import { faBed, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from 'react-date-range';
import { useContext, useState } from "react";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";


function Header() {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const {dispatch}= useContext(SearchContext)

    const navigate = useNavigate();

    const handleSearch = () => {
        dispatch({type:"NEW_SEARCH",payload:{destination,dates}})
        navigate("/hotels", { state: { destination, dates} });
    }

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="title">
                    <h1 className="headertitle">Find your perfect place.</h1>
                    <p className="headerDesc">Try searching for a city, a specific hotel, or even a landmark!</p>
                </div>
                <div className="headerSearchContainer">
                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} className="headerIcon" />
                            <input type="text" placeholder="where are you?" className="headerSearchInput" onChange={e => setDestination(e.target.value)} />
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                            <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && <DateRange
                                editableDateInputs={true}
                                onChange={item => setDates([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={dates}
                                className="date"
                                minDate={new Date()}
                            />}
                        </div>
                    </div>
                    <button className="headerButton" onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Header;