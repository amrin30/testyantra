import React from 'react'
import Footer from './../Footer/Footer';
import Image1 from '../Image/cloud.png'
import Image2 from '../Image/aws-service.png'
import Image3 from '../Image/IWT-Service.png'
import Image14 from '../Image/Frontend.png';
import Image15 from '../Image/Backend.png';
import Image16 from '../Image/Database.png';
import Image17 from '../Image/asset 13.jpeg';
import Image18 from '../Image/asset 14.jpeg';
import Image19 from '../Image/asset 15.jpeg';
import { MdPlayArrow } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import StyleDev from './SoftwareDevelopment.module.css'
import '../Global.css'

const SoftwareDevelopment = () => {
  return (
    <div>
      <div className={StyleDev.main}>
        <div className={StyleDev.cont}>
          <h1 className={StyleDev.head}>Software Development</h1>
          <br />
          <p className={StyleDev.para}>Our 1,100+ expert software developers utilize the latest technology stack to build and integrate leading applications across a variety of domains.</p>
        </div>
      </div>

      {/* ?------------------------------------------------------------------ */}
      <div className={StyleDev.main2}>
        <nav className={StyleDev.cont2}>
          <h1 className={StyleDev.head2}>
          Digital Transformation Services
          </h1>
          <br />
          <p className={StyleDev.para2}>A holistic range of services covering all aspects of software development life
          cycle (SDLC) with industry domain expertise</p>
        </nav>
      </div>

      {/* ?-----cards------------------------------------------------------- */}
      <div className={StyleDev.main3}>
        <div className={StyleDev.cont3}>
          <div className={StyleDev.cards}>
            <div className={StyleDev.logo}>
              <img src={Image1} alt={Image1} />
            </div>
            <br />
            <h3>Cloud Services</h3>
            <br />
            <p>Our team of IT consultants and managed services experts provide timely consulting, software configuration, deployment, and support for an array of cloud and premise based applications.</p>
          </div>
          <div className={StyleDev.cards}>
            <div className={StyleDev.logo}>
              <img src={Image2} alt={Image2} />


            </div>
            <br />
            <h3>Aws Services</h3>
            <br />
            <p>Crowdsourced Testing is a necessity and important solution for companies that are launching time-sensitive products, such as mobile applications and web-based platforms with UI, UX issues and software bugs.</p>
          </div>
          <div className={StyleDev.cards}>
            <div className={StyleDev.logo}>
              <img src={Image3} alt={Image3} />

            </div>
            <br />
            <h3>IOT Services
            </h3>
            <br />
            <p>Test Yantra Global offers a suite of software testing tools, methodology, and resources aimed at enhancing the quality assurance of your applications including  testing services like automation, performance, application and security testing.</p>
          </div>
        </div>

      </div>
      {/* ?-----------------------Cards2------------------------------------------ */}
      <div className={StyleDev.main2}>
        <nav className={StyleDev.cont2}>
          <h1 className={StyleDev.head2}>
          Empowering Digital Success with comprehensive Technology Expertise
          </h1>
          
        </nav>
      </div>

      {/* ?-----cards------------------------------------------------------- */}
      <div className={StyleDev.main3}>
        <div className={StyleDev.cont3}>
          <div className={StyleDev.cards}>
            <div className={StyleDev.logo}>
              <img src={Image14} alt={Image14} />
            </div>
            <br />
            <h3>Frontend</h3>
            <br />
            <p>Our team of IT consultants and managed services experts provide timely consulting, software configuration, deployment, and support for an array of cloud and premise based applications.</p>
          </div>
          <div className={StyleDev.cards}>
            <div className={StyleDev.logo}>
              <img src={Image15} alt={Image15} />


            </div>
            <br />
            <h3>Backend</h3>
            <br />
            <p>Crowdsourced Testing is a necessity and important solution for companies that are launching time-sensitive products, such as mobile applications and web-based platforms with UI, UX issues and software bugs.</p>
          </div>
          <div className={StyleDev.cards}>
            <div className={StyleDev.logo}>
              <img src={Image16} alt={Image16} />

            </div>
            <br />
            <h3>Database
            </h3>
            <br />
            <p>Test Yantra Global offers a suite of software testing tools, methodology, and resources aimed at enhancing the quality assurance of your applications including  testing services like automation, performance, application and security testing.</p>
          </div>
        </div>

      </div>
      {/* ?-----------article------------------------------------------- */}

      <div className={StyleDev.main5_}>
        <div className={StyleDev.cont6_}>
          <div className={StyleDev.num2}>
            <h1>Our Recent Articles</h1>
          </div>
        </div>
      </div>

      <div className={StyleDev.main7}>
        <div className={StyleDev.cont8}>
          <div className={StyleDev.art}>
            <div className={StyleDev.art_img}>
              <img className={StyleDev.imge} src={Image17} alt={Image17} />
            </div>
            <div className={StyleDev.art_img2}>
              <p>Blog | Software Testing</p>
              <h3>Comprehensive Guide to Developing Test Scripts for Software Testing</h3>
              <p>Effective software testing is essential for the delivery of high-quality software products. The development of test scripts is a critical...</p>
              <button className={StyleDev.btn2}>Read More<FaArrowRight /></button>
            </div>
          </div>
          <div className={StyleDev.art}>
            <div className={StyleDev.art_img}>
              <img className={StyleDev.imge} src={Image18} alt={Image18} />
            </div>
            <div className={StyleDev.art_img2}>
              <p>Blog | Categories of Tests</p>
              <h3>Guidelines for Writing Effective Unit Tests</h3>
              <p>Learn effective unit testing techniques to enhance code quality and development speed. Discover essential tools...</p>
              <button className={StyleDev.btn2}>Read More <FaArrowRight /></button>
            </div>

          </div>
          <div className={StyleDev.art}>
            <div className={StyleDev.art_img}>
              <img className={StyleDev.imge} src={Image19} alt={Image19} />

            </div>
            <div className={StyleDev.art_img2}>
              <p>Blog | Test Data</p>
              <h3>Automation Testing Tools: Selenium, Cypress, Playwright, Robot Framework vs. FireFlink</h3>
              <p>Dive into the specifics of renowned automation tools like Selenium, Cypress, Playwright, and Robot Framework...</p>
              <button className={StyleDev.btn2}>Read More<FaArrowRight /></button>
            </div>
          </div>
          </div>
          </div>
          {/* ?------------footer-------------------------------------------- */}
         <Footer/>
    </div>
  )
}

export default SoftwareDevelopment
