import React from 'react'
import Nav from '../Landing-page/Nav'
import About from '../Landing-page/About'
import Testimonials from '../Landing-page/Testimonials'
import Collaborations from '../Landing-page/Collaborations'
import Achievement from '../Landing-page/Achievement'
import Discount from '../Landing-page/Discount'
import Faqs from '../Landing-page/Faqs'

const Landing = () => {
  return (
    <>
    <Nav/>
    <About/>
    <Discount/>
    <Testimonials/>
    <Collaborations/>
    <Achievement/>
    </>
  )
}

export default Landing