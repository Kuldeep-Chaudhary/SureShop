import React from 'react'
import PageBanner from '../components/banner/PageBanner'
import CartTable from '../components/cart'

const Cart = () => {
  return (
    <>
    <PageBanner
   heading="Cart Products"
   breadcrumbLinks={[
     { label: 'Home', href: '/' },
     { label: 'Cart', href: '/cart' }
   ]}
 />
 <CartTable/>
 </>
  )
}

export default Cart