import React from 'react'
import './whatGPT3.css';
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='This Is Gadget World' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The Possibilities are way beyond your imagination</h1> 
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text='We so opinion friends me message as delight.' />
        <Feature title="Knowledgebase" text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
        <Feature title="Education" text='Get to know more and be informed of a whole new world.' />
      </div>
    </div>
  )
}

export default WhatGPT3
