import React from 'react'
import Carousel from './Carousel'
import Description from './Description'
import Footer from './Footer'




function Home() {
  return (
   <>
   <div class="container">
   <section id="home" class="section active">
    <h2>Welcome to College Event Management</h2>
    <p>Your one-stop solution for managing and keeping track of college events. Stay informed about upcoming events, submit your own, and get involved in the college community.</p>
    </section>
    <Carousel/>
    <Description/>
    <Footer/>
   </div>




   
 
   
   </>
   
  )
}

export default Home