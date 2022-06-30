import React from 'react'
import Img from '../assests/about.jpeg'

function About() {
  return (
    <div className='container'>
    <div className='row'>
          <img src={Img} className=".img-fluid" alt="Responsive image"></img>
    </div>
<div>
<br/>
</div>
               
      <div  className='d-grid gap-3'>
        <h3><i>About Us</i></h3>
                <i>At Georgian, we work with industry and community partners to offer relevant, cutting-edge curriculum, quality work placements and co-op experiences with top employers. Our students graduate with the skills and the mindset to be innovative thinkers and changemakers who can transform their workplaces and communities.</i>
                <i>Our vision is to accelerate success through exceptional teaching and learning, innovation and partnerships.</i> <br/>             
      </div>

      <div  className='d-grid gap-3'>
        <h3><i>Explore our campus locations</i></h3>

                <i>Georgian’s seven campuses encompass a total area of 21,000 square kilometres (almost the same size as the country of El Salvador) and are located in some of the most sought-after areas in Central Ontario</i>              
                <li className='p-2 bg-light border'>Barrie</li>
                <li className='p-2 bg-light border'>downtown Barrie location (Arch and Helen Brown Design and Digital Arts Centre)</li>
                <li className='p-2 bg-light border'>Midland</li>
                <li className='p-2 bg-light border'>Muskoka (Bracebridge)</li>
                <li className='p-2 bg-light border'>Orangeville</li>
                <li className='p-2 bg-light border'>Orillia</li>
                <li className='p-2 bg-light border'>Owen Sound</li>
                <li className='p-2 bg-light border'>South Georgian Bay (Collingwood)</li>

                <i>Our campuses play important roles in each of these communities, serving as centres for academic, social and cultural activities, and contributing to the social and economic well-being of the areas.</i>
<br/>
<br/>
      </div>
        
  </div>
  )
}

export default About