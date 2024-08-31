import React from 'react'
import ProductDetail from '../components/productdetail'
import PageBanner from '../components/banner/PageBanner'

const ProductsDetail = () => {
  return (
    <>
    <PageBanner
   heading="Products Detail"
   breadcrumbLinks={[
     { label: 'Product', href: '/product' },
     { label: 'ProductDetails', href: '/productdetail' }
   ]}
 />
 <ProductDetail/></>
  )
}

export default ProductsDetail