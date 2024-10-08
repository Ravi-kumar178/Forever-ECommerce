import React from 'react'
import Hero from '../Components/Home/Hero'
import LatestCollection from '../Components/Home/LatestCollection'
import BestSeller from '../Components/Home/BestSeller'
import Policy from '../Components/Home/Policy'
import Newsletter from '../Components/Home/Newsletter'
import NewHero from '../Components/Home/NewHero'
import DescriptionSection from '../Components/Home/DescriptionSection'



const Home = () => {
  return (
    <div className='w-full'>
      {/* <Hero/> */}
      <NewHero/>
      <DescriptionSection/>
      <LatestCollection/>
      <BestSeller/>
      <Policy/>
      <Newsletter/>
      
    </div>
  )
}

export default Home