import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Weather',
    github: 'https//github.com',
    demo: 'https//google.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Notebook and Plants ',
    github: 'https//github.com',
    demo: 'https//google.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'City',
    github: 'https//github.com',
    demo: 'https//google.com'
  },
  {
    id: 5,
    image: IMG4,
    title: 'Notebook on a Coffie Table',
    github: 'https//github.com',
    demo: 'https//google.com'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Workdesk',
    github: 'https//github.com',
    demo: 'https//google.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Books',
    github: 'https//github.com',
    demo: 'https//google.com'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>


    <div className='container portfolio__container'>
    {
      data.map(({id, image, title, github, demo}) => {
        return (
          <article key={id} className='portfolio__item'>
        <div>
          <div className='portfolio__item-image'>
          <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>

      </article> 
        )
      })
     }
    </div>
    </section>
  )
}

export default Portfolio