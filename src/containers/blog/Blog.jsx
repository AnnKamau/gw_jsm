import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgurl={blog01} date='May 15, 2021' title='GW let us exlore how it is?' />
        </div>
        <div className='gpt3__blog-container_groupB'>
        <Article imgurl={blog02} date='June 15, 2022' title='GW is your one-stop tech hub' />
        <Article imgurl={blog03} date='July 09, 2021' title='Affordable prices and they deliver countrywide' />
        <Article imgurl={blog04} date='Aug 03, 2021' title='Phones are also repaired and well taken off ' />
        <Article imgurl={blog05} date='Sep 26, 2021' title='Thank you for Your services Gadget World' />
        </div>
      </div>
    </div>
  )
}

export default Blog
