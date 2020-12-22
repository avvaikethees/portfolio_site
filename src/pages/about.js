import React from 'react'
import './about.css'

export default function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>I'm Avvai </h1>
        <h2>(It rhymes with 'hey')</h2>
        <p> Loren Ipsum </p>
      </div>
      <img src="headshot2.jpg" className="headshot" alt="headshot of Avvai"></img>
    </div>
  )
}
