import React from 'react'
import StyleSkills from './SoftwareEnhancement.module.css'
import Footer from './../Footer/Footer';
import Image1 from '../Image/expertITConsultant.png'
import Image2 from '../Image/practical-learning.png'
import Image3 from '../Image/industry-recognition.png'
import Image14 from '../Image/asset 13.jpeg';
import Image15 from '../Image/asset 14.jpeg';
import Image16 from '../Image/asset 15.jpeg';
// import { MdPlayArrow } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import '../Global.css'
const SoftwareEnhancement = () => {
  return (
    <div>
      <div className={StyleSkills.main}>
        <div className={StyleSkills.cont}>
          <h1 className={StyleSkills.head}>Software Enhancement </h1>
          <br />
          <p className={StyleSkills.para}>Unlock Your Potential - Explore Skill Enhancement Opportunities with Test Yantra Global.

</p>
        </div>
      </div>

      {/* ?------------------------------------------------------------------ */}
      <div className={StyleSkills.main2}>
        <nav className={StyleSkills.cont2}>
          <h1 className={StyleSkills.head2}>
            Elevate Your Teams's Skilld with Test Yantra Global: Your Gateway to Excellence.
          </h1>
          <br />
          <p className={StyleSkills.para2}>Benefits of Choosing Test Yantra Global</p>
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
            <h3>Expert IT Consultants</h3>
            <br />
            <p>Test Yantra Global has trained 670,000+ learners since its inception. Our team of 400+ trainers provides invaluable domain expertise and insight into their specific topics.</p>
          </div>
          <div className={StyleSkills.cards}>
            <div className={StyleSkills.logo}>
              <img src={Image2} alt={Image2} />


            </div>
            <br />
            <h3>Practical Learning
            </h3>
            <br />
            <p>Our experiential learning methodology emphasizes practical training to ensure that you acquire real-world hands-on skills that enable immediate engagement.</p>
          </div>
          <div className={StyleSkills.cards}>
            <div className={StyleSkills.logo}>
              <img src={Image3} alt={Image3} />

            </div>
            <br />
            <h3>Industry Recognition
            </h3>
            <br />
            <p>We work closely with 2,500+ companies to ensure our programs meet the precise evolving needs of the industry. With 17,000 people registered in our day-to-day IT-related training courses, Test Yantra Global’s training programs are highly respected and sought after by employers.</p>
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

export default SoftwareEnhancement
