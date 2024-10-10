import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='flex flex-col bg-background'>
      <Header />
      <Hero />
    </div>
  )
}

export default Home