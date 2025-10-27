import React from 'react'
import HeroSection from '../components/Heromain'
import DiscoverSection from '../components/Discoversection'
import Homeoffermenu from '../components/Homeoffermenu'
import Homefooditem from '../components/Homefooditem'
import Homeabout from '../components/Homeabout'


function Home() {
  return (
    <div>
      <HeroSection/>
      <DiscoverSection/>
      <Homeoffermenu/>
      <Homefooditem/>
      <Homeabout/>
      
    </div>
  )
}

export default Home
