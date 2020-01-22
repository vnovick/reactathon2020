import React from 'react'
import Banner from '../../Banner'
import HomeBannerContent from './Content'
import './index.css'

const HomeBanner = () => (
  <Banner   
    className='home-banner'
    content={<HomeBannerContent />}
  />
)

export default HomeBanner