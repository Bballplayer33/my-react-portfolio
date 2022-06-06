import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
{
  avatar: AVTR1,
  name: 'Carl Labor',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim incidunt a consequatur voluptatum fuga tenetur. Aut reprehenderit praesentium, veritatis animi odit ad quis ullam aliquam placeat assumenda explicabo et.'
},
{
  avatar: AVTR2,
  name: 'Shelby Kets',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim incidunt a consequatur voluptatum fuga tenetur. Aut reprehenderit praesentium, veritatis animi odit ad quis ullam aliquam placeat assumenda explicabo et.'
},
{
  avatar: AVTR3,
  name: 'Jordan Smith',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim incidunt a consequatur voluptatum fuga tenetur. Aut reprehenderit praesentium, veritatis animi odit ad quis ullam aliquam placeat assumenda explicabo et.'
},
{
  avatar: AVTR4,
  name: 'Tina Snow',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim incidunt a consequatur voluptatum fuga tenetur. Aut reprehenderit praesentium, veritatis animi odit ad quis ullam aliquam placeat assumenda explicabo et.'
}
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      >
      {
        data.map(({avatar,name,review}, index) => {
          return (
    <SwiperSlide key={index} className='testimonial'>
      <div className='client__avatar'>
        <img src={avatar} />
        </div>
        <h5 className='client__name'>{name}</h5>
        <small className='client__review'>
         {review}
        </small>

      </SwiperSlide >
          )
        })
      }
      

      </Swiper>
    </section>
  )
}

export default Testimonials