import React from 'react'
import Products from '../components/products'
import PageBanner from '../components/banner/PageBanner'

const Productss = () => {
  return (
    <>
    <PageBanner
   heading="Products"
   breadcrumbLinks={[
     { label: 'Home', href: '/' },
     { label: 'Products', href: '/product' }
   ]}
 />
    <Products showAll={true} />
    </>
  );
}

export default Productss