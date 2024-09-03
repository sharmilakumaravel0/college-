import React from 'react';
import './Home.css'; // Import the specific CSS file for Home

import Footer from '../footer/Footer';
import Carousel from '../carousel/Carausel';
import Description from '../description/Description';


const Home = () => {
  return (
    <>

    <Carousel/>
    <section id="home">
      <h1 className='he'>Welcome to our college event management</h1>
      <p className="description">Our platform helps you organize and manage college events with ease. From scheduling to announcements, we provide all the tools you need to ensure your events are a success.</p>
    </section>
    <Description/>
    <Footer/>
    </>
  );
}

export default Home;
