import React, { useState } from 'react'
import Modal from "react-modal"; 
import "./books.css"

export default function Books() {
  const [modalIsOpen, setModalIsOpen] = useState(false); 
  return (
    <div>
      This is the page for books
      <div onClick={() => setModalIsOpen(true)}>
        <img src="Piranha_fishing_cover.jpg" className="books" alt="book cover of Piranha Fishing In the Amazon"></img>
      
      
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <div>
        <img src="Piranha_fishing_cover.jpg" className="books" alt="book cover of Piranha Fishing In the Amazon"></img>
        </div>
        <div className="book-description">
          <p>
          A self-published collection of short stories by Kyle Siemens. We collaborated on the cover and illustrations and I did the book and layout design.  
          </p>
        </div>
      <div>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </div>
    </Modal>
    </div>
  )
}
