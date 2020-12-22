import React, { useState } from "react"
import { Link } from "gatsby"
import Modal from "react-modal"; 

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Menu from "../components/menu"

const IndexPage = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false); 
  return (
  <Layout>
    <SEO title="Home" />
    <Menu />
    <h1>Web Developer. Designer.</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/monoporead">Monoporead</Link> <br />
    <Link to="/scheduler">Scheduler</Link> <br />
    <Link to="/pomododo">Pomodoro</Link> <br />
    <Link to="/wlab">W.Lab</Link> <br />
    <button onClick={() => setModalIsOpen(true)}>Open modal</button>
    <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
      <h2>Modal Title </h2>
      <p>Modal Body </p>
      <div>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </div>
    </Modal>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
    )
  }

export default IndexPage
