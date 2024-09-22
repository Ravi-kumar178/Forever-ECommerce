import React from 'react'
import Hero from '../Components/Home/Hero'
import LatestCollection from '../Components/Home/LatestCollection'
import BestSeller from '../Components/Home/BestSeller'
import Policy from '../Components/Home/Policy'
import Newsletter from '../Components/Home/Newsletter'


const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <Policy/>
      <Newsletter/>
      
    </div>
  )
}

export default Home