import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import "./about.css"; // Add your custom CSS for styling if needed

const About = () => {
    return (
        <div id="aboutSection" className="aboutContainer mt-5" style={{ backgroundColor: '#F3F4F5' }}>
        <h1 className="aboutTitle fw-bold px-4 py-2" style={{ fontSize: '30px', backgroundColor: '#F3F4F5', margin: '0 225px' }}>About</h1>
        <Container style={{ maxWidth: '1024px', padding: '20px' }}>
                <Row>
                    <Col md={6} className="mb-4">
                        <Card className="aboutCard h-100 d-flex flex-column justify-content-between">
                            <Card.Body>
                                <Card.Title>About HotelBooking</Card.Title>
                                HotelBooking hotel search allows users to compare hotel prices in just a few clicks from hundreds of booking sites for more than 5.0 million hotels and other types of accommodation in over 190 countries. We help millions of travelers each year compare deals for hotels and accommodations. Get information for weekend trips to cities like Mumbai or Bengaluru and you can find the right hotel on trivago quickly and easily. Delhi and its surrounding area are great for trips that are a week or longer with the numerous hotels available.
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="aboutCard h-100 d-flex flex-column justify-content-between">
                            <Card.Body>
                                <Card.Title>Find Cheap Hotels on HotelBooking</Card.Title>
                                With HotelBooking you can easily find your ideal hotel and compare prices from different websites. Simply enter where you want to go and your desired travel dates, and let our hotel search engine compare accommodation prices for you. To refine your search results, simply filter by price, distance (e.g. from the beach), star category, facilities and more. From budget hostels to luxury suites, HotelBooking makes it easy to book online. You can search from a large variety of rooms and locations across India, like Shimla and Jaipur to popular cities and holiday destinations abroad!
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="aboutCard h-100 d-flex flex-column justify-content-between">
                            <Card.Body>
                                <Card.Title>Hotel Reviews Help You Find Your Ideal Hotel</Card.Title>
                                Over 175 million aggregated hotel ratings and more than 19 million images allow you to find out more about where you're travelling. To get an extended overview of a hotel property, HotelBooking shows the average rating and extensive reviews from other booking sites, e.g. Hotels.com, Expedia, Agoda, leading hotels, etc. HotelBooking makes it easy for you to find information about your trip to Dubai, including the ideal hotel for you.
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-4">
                        <Card className="aboutCard h-100 d-flex flex-column justify-content-between">
                            <Card.Body>
                                <Card.Title>How to Book</Card.Title>
                                HotelBooking is a hotel search with an extensive price comparison. The prices shown come from numerous hotels and booking websites. This means that while users decide on HotelBooking which hotel best suits their needs, the booking process itself is completed through the booking sites (which are linked to our website). By clicking on the “view deal” button, you will be forwarded onto a booking site where you can complete the reservation for the hotel deal found on HotelBooking. Let trivago help you to find the right price from hundreds of booking sites!
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
