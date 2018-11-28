import React from 'react'
import { Link } from 'gatsby'
import Subscribe from '../components/subscribe'

import Layout from '../components/layout'
import Image from '../components/image'

const vidUrl = require('../static/mp4/bg.mp4')

const IndexPage = () => (
  <Layout>
      <div className="overlay"></div>
      <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
        <source src={vidUrl} type="video/mp4" />
      </video>

      <div className="masthead">
        <div className="masthead-bg"></div>
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 my-auto">
              <div className="masthead-content text-white py-5 py-md-0">
                <h1 className="mb-3">Coming Soon!</h1>
                <p className="mb-5">We're working hard to finish the development of this site. Our target launch date is
                  &nbsp; <strong>January 2019</strong>! Sign up for updates using the form below!</p>
               
                  <Subscribe />
               
                 


              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="social-icons">
        <ul className="list-unstyled text-center mb-0">
          <li className="list-unstyled-item">
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-unstyled-item">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="list-unstyled-item">
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
  </Layout>
)

export default IndexPage
