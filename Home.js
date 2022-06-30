import React from 'react'
import Img from '../assests/home.jpeg'
function Home() {
  return (
    <div className='container'>
      <div className='row'>
            <img src={Img} className=".img-fluid" alt="Responsive image"></img>
      </div>

        <div className='mx-10'>
        <br/>
            <i>
              Georgian is a transformative experience that connects students to the skills they need, mindset to succeed, and confidence to thrive. We produce graduates who are fully connected to their potential, industry, community and the world.
              Being here can lead to amazing things!
            </i>
        </div>
                 
        <div  className='d-grid gap-3'>
                  <b>General Information</b>
                  <li className='p-2 bg-light border'>Established 1967</li>
                  <li className='p-2 bg-light border'>Georgian is the first ― and only ― college in Canada designated a changemaker college by Ashoka U for our role as a leader in social innovation and changemaking in higher education</li>
                  <li className='p-2 bg-light border'>2020-21 Key Performance Indicators (KPIs)</li>
                  <li className='p-2 bg-light border'>Georgian has one of the highest graduate employment rates among Ontario colleges.</li>
                  <li className='p-2 bg-light border'>Despite the challenges of a global pandemic and the impact on our economy, our graduates’ satisfaction with their Georgian experience grew by almost 6% to 82.5%, exceeding the provincial average</li>
                  <li className='p-2 bg-light border'>	Recognized leader in student work experience</li>
                  <li className='p-2 bg-light border'>	Ontario’s #1 co-op college</li>
                  <li className='p-2 bg-light border'>	6,200 co-op employer partners</li>
                  <li className='p-2 bg-light border'>	Pioneer in co-op programs across the province with highest percentage of students enrolled in paid co-op work terms in the Ontario college system (based on OCAS 2019 fall enrolment figures)</li>
        </div>
                  <br/>                                   
                  <br/>                                   
          
    </div>
  )
}

export default Home