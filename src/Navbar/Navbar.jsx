import React from 'react'
import Image1 from '../Image/logo.svg'
import { Link } from 'react-router-dom'
import Style from "./Navbar.module.css"
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
    return (
      <nav className={Style.navContainer}>
          <div className={Style.secContainer}>
              <div className={Style.logo}>
                  <img src={Image1}  alt="" />
              </div>
              <div>
                  <ul className={Style.list}>
                      <li>
                          <Link to='/'>Home</Link>
                      </li>
                      <li>
                          {/* <Link to='/Services'> */}
                          Services <RiArrowDropDownLine className={Style.arrow}/>
                          {/* </Link> */}
                          <div className={Style.serviceLink}>
                              <ul>
                                  <li><Link to='/Services'>Software Testing (TAAS)</Link></li>
                                  <li><Link to='/SoftwareDevelopment'>Software Development</Link></li>
                                  <li><Link to='/SoftwareEnhancement'>Software Enhancement</Link></li>
                                  <li><Link to='/ITConsulting'>IT Consulting</Link></li>
                                  <li><Link to='/CrowdTesting'>Crowd Testing</Link></li>
                              </ul>
                          </div>
                      </li>
                      <li>
                          {/* <Link to='/Partners'> */}
                          Partners <RiArrowDropDownLine className={Style.arrow}/>
                          {/* </Link> */}
                          <div className={Style.partnerlink}>
                              <ul>
                                  <li><Link to='/partners'>Firelink</Link></li>
                              </ul>
                          </div>
                      </li>
                      <li>
                          <Link to='/Articles'>Articles</Link>
                      </li>
                      <li>
                          <Link to='/contact'>
                          <div className={Style.gettouch}>
                              <p>Get In Touch</p>
                          </div>
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
          
      </nav>
    )
  }
  
  export default Navbar