import React from 'react'
import HeroSection from '../components/Heromain'
import DiscoverSection from '../components/Discoversection'
import Homeoffermenu from '../components/Homeoffermenu'
import Homefooditem from '../components/Homefooditem'
import Homeabout from '../components/Homeabout'
import Hometablebook from '../components/Hometablebook'
import HomeCard from '../components/HomeCard'
import Homesubscribe from '../components/Homesubscribe'



function Home() {
  return (
    <div>
      <HeroSection/>
      <DiscoverSection/>
      <Homeoffermenu/>
      <Homefooditem/>
      <Homeabout/>
      <Hometablebook/>
      <HomeCard/>
      <Homesubscribe/>
      
      
      
    </div>
  )
}

export default Home
