import React from 'react'
import AppDrawer from '../components/drawer'
import SearchBox from '../components/search'
import Appbar from '../components/appbar'

const Navbar = () => {
  return (
    <>
    <Appbar/>
    <AppDrawer/>
    <SearchBox/>
    </>
  )
}

export default Navbar