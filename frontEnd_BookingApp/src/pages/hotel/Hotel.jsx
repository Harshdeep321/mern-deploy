import React, { useContext, useState } from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";

function Hotel() {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [slideNumber, setSlideNumber] = useState(0);
    const [openSlider, setOpenSlider] = useState(false);
    const [openModle, setOpenModle] = useState(false);

    const { data, loading } = useFetch(`/hotels/find/${id}`)
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const { dates, options } = useContext(SearchContext)
    if (!dates || dates.length === 0) {
        return <div>No dates available</div>;
      }


    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }
    const endDate = dates[0]?.endDate;
    if (!endDate) {
        return <div>No end date available</div>;
    }

    const days = dayDifference(dates[0].endDate, dates[0].startDate)

    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpenSlider(true);
    }

    const handleArrow = (direction) => {
        let newSlideNumber;

        if (direction === "l") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        }
        else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }

        setSlideNumber(newSlideNumber);
    }

    const handleClick = () => {
        if (user) {
            setOpenModle(true);
            navigate("/payment");
        } else {
            navigate("/login");
        }
    }
    const roomRate = options?.room || 0; // Default to 0 if options?.room is undefined
 

    return (
        <div>
            <Navbar />
            {loading ? (
                "Loading"
            ) : (
                <div className="hotelContainer">
                    {openSlider && (<div className="slider">
                        <FontAwesomeIcon icon={faCircleXmark} className="closeBtn" onClick={() => setOpenSlider(false)} />
                        <FontAwesomeIcon icon={faCircleArrowLeft} className="arrowBtn" onClick={() => handleArrow("l")} />
                        <div className="sliderWrapper">
                            <img src={data.photos[slideNumber]} className="sliderImg" alt="" />
                        </div>
                        <FontAwesomeIcon icon={faCircleArrowRight} className="arrowBtn" onClick={() => handleArrow("r")} />
                    </div>)}
                    <div className="hotelWrapper">
                        <button className="bookNowbtn">Book Now!</button>
                        <h1 className="hotelTitle">{data.name}</h1>
                        <div className="hotelAddress">
                            {/* <FontAwesomeIcon icon={faLocation} /> */}
                            <span>{data.address}</span>
                        </div>
                        <span className="hotelDistance">
                            Excellent location - {data.distance}m from centre
                        </span>
                        <span className="hotelPeiceHighlight">
                            Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi
                        </span>
                        <div className="hotelImages">
                            {data.photos?.map((photo, i) => (
                                <div className="hoteImgWrapper" key={i}>
                                    <img onClick={() => handleOpen(i)} src={photo} className="hotelImg" alt=""/>
                                </div>
                            ))}
                        </div>
                        <div className="hotelDetails">
                            <div className="hotelDetailsTexts">
                                <h1 className="hotelTitle">{data.title}</h1>
                                <p className="hotelDesc">
                                    {data.desc}
                                </p>
                            </div>
                            <div className="hotelDetaisPrice">
                                <h1>Perfect for a {days}-night stay!</h1>
                                <span>
                                    Locate in the real heart of krakow, this property has an excellent location score of 9.8!
                                </span>
                                <h2>
                                    <b>${days * data.cheapestPrice * roomRate}</b>({days}{" "} nights)
                                </h2>
                                <button onClick={handleClick}>Book Now!</button>
                            </div>
                        </div>
                    </div>
                    <MailList />
                    <Footer />
                </div>)}
            {openModle && <Reserve setOpenSlider={setOpenModle} hotelId={id} />}
        </div>
    )
}

export default Hotel;


 