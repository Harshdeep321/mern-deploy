import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for making API requests
import SearchItem from "../searchitems/SearchItem";
import useFetch from "../../hooks/useFetch";
import  Navbar  from "../../components/navbar/Navbar";

const AllHotels = () => {
    const { data, loading, error, reFetch } = useFetch(
        `/hotels`
    );
    const handleClick = () => {
        reFetch();
    };

    return (
        <div>
            <Navbar />
            <div className="container" style={{ maxWidth: "1024px"}}>
                <h1 className="heading" style={{marginTop: 70,marginBottom:10}}>Showing All Available Hotels</h1>
                <div className="listResult">
                    {loading ? (
                        "loading"
                    ) : (
                        <>
                            {data.map((item) => (
                                <SearchItem item={item} key={item._id} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllHotels;
