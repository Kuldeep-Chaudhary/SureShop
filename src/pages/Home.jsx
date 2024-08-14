import React from 'react'
import Banner from '../components/banner'
import Promotions from '../components/promotions'
import Products from '../components/products'

const Home = () => {
  return (
    <>
    <Banner/>
    <Promotions/>
        <Products showAll={false} />
    </>
  )
}

export default Home