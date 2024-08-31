import React from 'react'
import AppDrawer from '../components/drawer'
import SearchBox from '../components/search'
import Appbar from '../components/appbar'
import { Container } from '@mui/material'

const Navbar = () => {
  return (
  
    <Container maxWidth="xl" >
    <Appbar/>
    <AppDrawer/>
    <SearchBox/>
    </Container>
    
  )
}

export default Navbar