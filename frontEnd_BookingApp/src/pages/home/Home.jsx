import React from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperty from "../../components/featuredProperty/FeaturedProperty";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import About from "../../components/about/About";
function Home() {
    return (
        <div className=" ">
            <div className="homepage"></div>
            <Navbar />
            <Header />
            <div className="homeContainer mt-5 d-flex flex-column align-items-center gap-3">
                <h1 className="homeTitle fw-bold" style={{ width: '1024px', fontSize: '25px' }}>Property by Cities</h1>
                <Featured />
                <h1 className="homeTitle fw-bold" style={{ width: '1024px', fontSize: '25px' }}>Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle fw-bold" style={{ width: '1024px', fontSize: '25px' }}>Homes guests love</h1>
                <FeaturedProperty />
            </div>
            <About />
            <MailList />
            <div className="homeContainer mt-5 d-flex flex-column align-items-center gap-3">
                <Footer />
            </div>
        </div>
    )
}

export default Home;