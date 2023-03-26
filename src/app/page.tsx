import React from 'react'
import NewsLetter from './compnent/NewsLetter'
import Banner from './compnent/Banner'
import Coursemain from './compnent/Coursemain'
import PopularCourse from './compnent/PopularCourse'
import OurInstructor from './compnent/OurInstructor'

export default function page() {
  return (
    <div>
      <Banner/>
      <Coursemain/>
      <PopularCourse/>
      <OurInstructor/>
    </div>
  )
}
