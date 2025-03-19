import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from '../../pages/About'
import HomePage from '../../pages/HomePage'
import Services from '../../pages/Services'
import CaseStudies from '../../pages/CaseStudies'
import Blog from '../../pages/Blog'
import IndustriesPage from '../../pages/IndustriesPage'
import SolutionsPage from '../../pages/SolutionsPage'



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/industries" element={<IndustriesPage/>} />
      <Route path="/solutionspage" element={<SolutionsPage/>} />
      <Route path="/casestudies" element={<CaseStudies />} />
      <Route path="/blog" element={<Blog/>} />
      {/* <Route path="*" element={<NotFound />} />  */}
    </Routes>
  )
}

export default AppRoutes