import React from 'react'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import FeatureProducts from '../components/FeatureProducts'
import Littlebanner from '../components/Littlebanner'
import NewArrive from '../components/NewArrive'
import NewsLatter from '../components/NewsLatter'

const index = () => {
  return (
    <>
      <Hero />
      <Feature/>
      <FeatureProducts/>
      <Littlebanner/>
      <NewArrive/>
      <NewsLatter/>
    </>
  )
}

export default index