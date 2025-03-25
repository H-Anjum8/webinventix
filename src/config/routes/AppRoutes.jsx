import React from 'react'
import { Route, Routes } from 'react-router-dom'

import About from '../../pages/About'
import HomePage from '../../pages/HomePage'
import Services from '../../pages/Services'
import CaseStudies from '../../pages/CaseStudies'
import Blog from '../../pages/Blog'
import IndustriesPage from '../../pages/IndustriesPage'
import SolutionsPage from '../../pages/SolutionsPage'
import Artificial_Intelligence from '../../pages/Services/Artificial_Intelligence'
import Computer_Vision from '../../pages/Services/Computer_Vision'
import Data_Intelligent_Analytics from '../../pages/Services/Data_Intelligent_Analytics'
import Enterprise_AI_Automation from '../../pages/Services/Enterprise_AI_Automation'
import Machine_Learning from '../../pages/Services/Machine_Learning'
import NLP_Language_Processing from '../../pages/Services/NLP_Language_Processing'
import Web_Development from '../../pages/Services/Web_Development'
import Automotive from '../../pages/IndustriesPage/Automotive'
import Financial from '../../pages/IndustriesPage/Financial'
import Healthcare from '../../pages/IndustriesPage/Healthcare'
import Manufacturing from '../../pages/IndustriesPage/Manufacturing'
import Supply_Chain from '../../pages/IndustriesPage/Supply_Chain'
import Sports from '../../pages/IndustriesPage/Sports'
import TechnologySaas from '../../pages/IndustriesPage/TechnologySaas'
import SingleBlog from '../../pages/CaseStudies/SingleBlog'
import BioSentinal from '../../pages/SolutionsPage/BioSentinal'
import FleetSync from '../../pages/SolutionsPage/FleetSync'
import GeoSentinal from '../../pages/SolutionsPage/GeoSentinal'
import VisionTrack from '../../pages/SolutionsPage/VisionTrack'
import BlogDetail from '../../pages/Blog/BlogDetail'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/industries" element={<IndustriesPage/>} />
      <Route path="/solutionspage" element={<SolutionsPage/>} />
      <Route path="/casestudies" element={<CaseStudies />} />
      <Route path="/casestudies/View/:id" element={<SingleBlog/>} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/View/:id" element={<BlogDetail/>} />

            {/* Service Sub-Pages */}
      <Route path="/services/Artificial-Intelligence" element={<Artificial_Intelligence/>} />
      <Route path="/services/Computer-Vision" element={<Computer_Vision/>} />
      <Route path="/services/Data-Intelligent-Analytics" element={<Data_Intelligent_Analytics />} />
      <Route path="/services/Enterprise-AI-Automation" element={<Enterprise_AI_Automation />} />
      <Route path="/services/Machine-Learning" element={<Machine_Learning />} />
      <Route path="/services/nlp-Language-Processing" element={<NLP_Language_Processing />} />
      <Route path="/services/Web-Mobile-SaaS-Development" element={<Web_Development />} />
        
         {/* Industries Sub-Pages */}
         <Route path="/industries/Automotive" element={<Automotive />} />
      <Route path="/industries/Financial" element={<Financial />} />
      <Route path="/industries/Healthcare" element={<Healthcare />} />
      <Route path="/industries/Manufacturing" element={<Manufacturing />} />
      <Route path="/industries/Supply-Chain" element={<Supply_Chain />} />
      <Route path="/industries/Sports" element={<Sports />} />
      <Route path="/industries/Technology-and-SaaS" element={<TechnologySaas />} />
       {/* Solutions Sub-Pages */}
       <Route path="/solutionspage/BioSentinal" element={<BioSentinal />} />
      <Route path="/solutionspage/FleetSync" element={<FleetSync />} />
      <Route path="/solutionspage/GeoSentinal" element={<GeoSentinal />} />
      <Route path="/solutionspage/VisionTrack" element={<VisionTrack />} />
    
    
    
    
      {/* <Route path="*" element={<NotFound />} />  */}
    </Routes>
  )
}

export default AppRoutes