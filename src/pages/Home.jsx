import React from 'react'
import Banner from '../components/banner'
import Promotions from '../components/promotions'
import Products from '../components/products'
import { Container } from '@mui/material'

const Home = () => {
  return (
    <Container maxWidth="xl">
    <Banner/>
    <Promotions/>
        <Products showAll={false} />
        </Container>
  )
}

export default Home