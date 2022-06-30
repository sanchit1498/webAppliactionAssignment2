import React from 'react'
import Img from '../assests/services.jpeg'

function Services() {
  return (
    <div className='container'>
      <div className='row'>
            <img src={Img} className=".img-fluid" alt="Responsive image"></img>
      </div>
<div>
  <br/>
</div>
                 
        <div  className='d-grid gap-3'>
                  <b>Programs Offered In Georgian College in different Academic Areas</b>

                  <li className='p-2 bg-light border'>Automotive Business</li>
                  <li className='p-2 bg-light border'>Business and Management</li>
                  <li className='p-2 bg-light border'>Community Safety</li>
                  <li className='p-2 bg-light border'>Computer Studies</li>
                  <li className='p-2 bg-light border'>Design and Visual Arts</li>
                  <li className='p-2 bg-light border'>Engineering and Environmental Technologies</li>
                  <li className='p-2 bg-light border'>Health, Wellness and Sciences</li>
                  <li className='p-2 bg-light border'>Hospitality, Tourism and Recreation</li>
                  <li className='p-2 bg-light border'>Human Services</li>
                  <li className='p-2 bg-light border'>Liberal Arts</li>
                  <li className='p-2 bg-light border'>Marine Studies</li>
                  <li className='p-2 bg-light border'>Skilled Trades</li>
                  
                  <br/>
                  <br/>
        </div>
          
    </div>
  )
}

export default Services