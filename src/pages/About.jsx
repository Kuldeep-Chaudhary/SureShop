import React from 'react'
import PageBanner from '../components/banner/PageBanner'

const About = () => {
  return (
    <PageBanner
   heading="About Us"
   breadcrumbLinks={[
     { label: 'Home', href: '/' },
     { label: 'About', href: '/about' }
   ]}
 />
  )
};

export default About;