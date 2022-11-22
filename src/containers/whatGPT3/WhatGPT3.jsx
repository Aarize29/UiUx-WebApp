import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'
function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id='wgpt3'>
      <div className="gtp3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="Generative Pre-trained Transformer 3 (GPT-3; stylized GPT·3) is an autoregressive language model that uses deep learning to produce human-like text. Given an initial text as prompt, it will produce text that continues the prompt.

The architecture is a standard transformer network (with a few engineering tweaks) with the unprecedented size of 2048-token-long context and 175 billion parameters (requiring 800 GB of storage)."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilies are beyond your imagination
        </h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="A chatbot or chatterbot is a software application used to conduct an on-line chat conversation via text or text-to-speech, in lieu of providing direct contact with a live human agent"/>
        <Feature title="Knowledgebase" text="A knowledge base is a technology used to store complex structured and unstructured information used by a computer system. The initial use of the term was in connection with expert systems, which were the first knowledge-based systems."/>
        <Feature title="Education" text="Artificial Intelligence (AI) has the potential to address some of the biggest challenges in education today, innovate teaching and learning practices, and accelerate progress towards SDG 4."/>
      </div>
    </div>
  )
}

export default WhatGPT3
