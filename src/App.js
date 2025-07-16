import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Program from './Component/Program/Program'
import Title from './Component/Title/Title'
import About from './Component/About/About'
import Campus from './Component/Campus/Campus'
import Testimonials from './Component/Testimonials/Testimonials'
import Contact from './Component/Contact Us/Contact'
import Footer from './Component/Footer/Footer'
import VideoPlayer from './Component/VideoPlayer/VideoPlayer'


const App = () => {

  const [playstate, setPlaystate] = React.useState(false);



  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className='container'>
        <Title subtitle='Our PROGRAM' title='What we Offer'></Title>
        <Program></Program>
        <About setPlaystate={setPlaystate}></About>
        <Title subtitle='Gallery' title='Campus Photos'></Title>
        <Campus></Campus>
        <Title subtitle='TESTIMONIALS' title='What Student Says'></Title>
        <Testimonials></Testimonials>
        <Title subtitle='Contact Us' title='Get in Touch'></Title>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <VideoPlayer playstate={playstate} setPlaystate={setPlaystate}></VideoPlayer>
    </div>
  )
}

export default App
