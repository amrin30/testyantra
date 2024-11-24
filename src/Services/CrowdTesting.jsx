import React from 'react'
import Footer from './../Footer/Footer';
import Image1 from '../Image/webCrowd.png'
import Image2 from '../Image/mobileCrowd.png'
import Image3 from '../Image/webMobile.png'
import Image14 from '../Image/asset 13.jpeg';
import Image15 from '../Image/asset 14.jpeg';
import Image16 from '../Image/asset 15.jpeg';
import { MdPlayArrow } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import StyleSkills from './CrowdTesting.module.css'
import '../Global.css'


const CrowdTesting = () => {
  return (
    <div>
      <div className={StyleSkills.main}>
        <div className={StyleSkills.cont}>
         <div>
         <h1 className={StyleSkills.head}>Crowd Testing</h1>
         <br />
          <p className={StyleSkills.para}>Experience the Power of Crowd Testing with Test Yantra Global. Key features include access to 65,000 test engineers, a unique status as the only major player with 'Dedicated labs' for crowd-testing, utilization of real devices and networks, and meticulous management of the crowd.
</p>
         </div>
        </div>
      </div>

      {/* ?------------------------------------------------------------------ */}
      <div className={StyleSkills.main2}>
        <div className={StyleSkills.conts}>
        <h1 className={StyleSkills.heads}>What is crowd Testing?</h1>
        <br />
        <p className={StyleSkills.paras}>Crowd Testing is a dynamic testing methodology that leverages a diverse and distributed group of testers. It enables testing across various devices, operating systems, and geographical locations, providing unparalleled coverage and real-user insights.</p>
        </div>
        <nav className={StyleSkills.cont2}>
          <h1 className={StyleSkills.head2}>
          Type's of Crowd Testing
          </h1>
          <br />
          <p className={StyleSkills.para2}>Our multichannel testing expertise allows us to provide a holistic service to fulfill all your testing needs in one place.</p>
        </nav>
      </div>

      {/* ?-----cards------------------------------------------------------- */}
      <div className={StyleSkills.main3}>
        <div className={StyleSkills.cont3}>
          <div className={StyleSkills.cards}>
            <div className={StyleSkills.logo}>
              <img src={Image1} alt={Image1} />
            </div>
            <br />
            <h3>Web Crowd Testing</h3>
            <br />
            <p>Involves crowd-sourced testing for web applications, ensuring compatibility across platforms and browsers like Chrome, Firefox, and Microsoft Edge. It includes cross-browser tests, trials on various operating systems and versions, diverse testing approaches, and participation from test engineers of all age groups.</p>
          </div>
          <div className={StyleSkills.cards}>
            <div className={StyleSkills.logo}>
              <img src={Image2} alt={Image2} />


            </div>
            <br />
            <h3>Mobile Crowd Testing
            </h3>
            <br />
            <p>Focuses on crowd-sourced testing for mobile apps, identifying compatibility issues across a range of Android and iOS devices. It encompasses platform variations, compatibility-driven tests, diverse testing methodologies, and engagement with test engineers from different demographics.

</p>
          </div>
          <div className={StyleSkills.cards}>
            <div className={StyleSkills.logo}>
              <img src={Image3} alt={Image3} />

            </div>
            <br />
            <h3>Web and Mobile Crowd
            </h3>
            <br />
            <p>Testing via FireFlink involves ensuring reliability, alignment with business requirements, and user-friendliness of web and mobile apps. This process includes tests for devices like Android TV, Google TV, and Fire TV Stick, evaluating across different brands and models, reproducing defects using video recordings and screenshots, and offering re-test support for identified issues.</p>
          </div>
        </div>

      </div>

      
      {/* ?-----------article------------------------------------------- */}

      <div className={StyleSkills.main5_}>
        <div className={StyleSkills.cont6_}>
          <div className={StyleSkills.num2}>
            <h1>Our Recent Articles</h1>
          </div>
        </div>
      </div>

      <div className={StyleSkills.main7}>
        <div className={StyleSkills.cont8}>
          <div className={StyleSkills.art}>
            <div className={StyleSkills.art_img}>
              <img className={StyleSkills.imge} src={Image14} alt={Image14} />
            </div>
            <div className={StyleSkills.art_img2}>
              <p>Blog | Software Testing</p>
              <h3>Comprehensive Guide to Developing Test Scripts for Software Testing</h3>
              <p>Effective software testing is essential for the delivery of high-quality software products. The development of test scripts is a critical...</p>
              <button className={StyleSkills.btn2}>Read More<FaArrowRight /></button>
            </div>
          </div>
          <div className={StyleSkills.art}>
            <div className={StyleSkills.art_img}>
              <img className={StyleSkills.imge} src={Image15} alt={Image15} />
            </div>
            <div className={StyleSkills.art_img2}>
              <p>Blog | Categories of Tests</p>
              <h3>Guidelines for Writing Effective Unit Tests</h3>
              <p>Learn effective unit testing techniques to enhance code quality and development speed. Discover essential tools...</p>
              <button className={StyleSkills.btn2}>Read More <FaArrowRight /></button>
            </div>

          </div>
          <div className={StyleSkills.art}>
            <div className={StyleSkills.art_img}>
              <img className={StyleSkills.imge} src={Image16} alt={Image16} />

            </div>
            <div className={StyleSkills.art_img2}>
              <p>Blog | Test Data</p>
              <h3>Automation Testing Tools: Selenium, Cypress, Playwright, Robot Framework vs. FireFlink</h3>
              <p>Dive into the specifics of renowned automation tools like Selenium, Cypress, Playwright, and Robot Framework...</p>
              <button className={StyleSkills.btn2}>Read More<FaArrowRight /></button>
            </div>
          </div>
          </div>
          </div>
          {/* ?------------footer-------------------------------------------- */}
         <Footer/>
    </div>
  )
}

export default CrowdTesting
