import React from 'react'
import ContactCard from '../components/contact'
import PageBanner from '../components/banner/PageBanner'

const Contact = () => {
  return (
    <>
     <PageBanner
    heading="Contact Us"
    breadcrumbLinks={[
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' }
    ]}
  />
    <ContactCard/>
    </>
  )
}

export default Contact