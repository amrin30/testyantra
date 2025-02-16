import React from 'react'
import StylesServices from './ITConsulting.module.css'
import Footer from './../Footer/Footer';
import Image1 from '../Image/cloud.png'
import Image2 from '../Image/aws-service.png'
import Image3 from '../Image/IWT-Service.png'
import Image14 from '../Image/banner1.png';
import Image15 from '../Image/banner2.png';
import Image16 from '../Image/banner3.png';
import { MdPlayArrow } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import '../Global.css'


const ITConsulting = () => {
  return (
    <div>
      <div className={StylesServices.main}>
        <div className={StylesServices.cont}>
          <h1 className={StylesServices.head}>IT Consulting </h1>
          <br />
          <p className={StylesServices.para}>Test Yantra Global offers IT consulting services with a seasoned team of 12,000+ engineers, boasting 15 years of experience, 3,000+ satisfied clients, and 180+ successful enterprise deployments, ensuring a smooth digital transformation for businesses.</p>
        </div>
      </div>

      {/* ?------------------------------------------------------------------ */}
      <div className={StylesServices.main2}>
        <nav className={StylesServices.cont2}>
          <h1 className={StylesServices.head2}>
          Our Range of Services
          </h1>
          <br />
          <p className={StylesServices.para2}>Test Yantra Global offers a comprehensive range of IT consulting services to meet your unique needs.</p>
        </nav>
      </div>

      {/* ?-----cards------------------------------------------------------- */}
      <div className={StylesServices.main3}>
        <div className={StylesServices.cont3}>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image1} alt={Image1} />
            </div>
            <br />
            <h3>Strategic IT Planning</h3>
            <br />
            <p>We work closely with your organization to understand your unique business goals and challenges. Based on this understanding, we leverage our CoE to develop a customized IT strategy that aligns technology investments with your long-term objectives.</p>
          </div>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image2} alt={Image2} />


            </div>
            <br />
            <h3>Technology Assessment and Auditing</h3>
            <br />
            <p>Our team of experts conducts thorough assessments and audits of your existing IT infrastructure and systems to identify areas for improvement, cost-saving opportunities, and potential vulnerabilities.</p>
          </div>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image3} alt={Image3} />

            </div>
            <br />
            <h3>Infrastructure Optimization
            </h3>
            <br />
            <p>We help you streamline your IT infrastructure, enhance scalability, and improve performance, all while reducing costs. Our consultants provide practical guidance for hardware, software, and cloud solutions.</p>
          </div>
        </div>

      </div>
      <div className={StylesServices.main3}>
        <div className={StylesServices.cont3}>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image1} alt={Image1} />
            </div>
            <br />
            <h3>Cybersecurity and Compliance</h3>
            <br />
            <p>In an era of escalating cyber threats characterized by increasing sophistication, safeguarding your data and adhering to industry regulations has become imperative. Test Yantra Global provides comprehensive cybersecurity solutions and expert compliance consulting services to ensure the security and regulatory compliance of your business.</p>
          </div>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image2} alt={Image2} />


            </div>
            <br />
            <h3>Digital Transformation</h3>
            <br />
            <p>In today's dynamic business landscape, organizations must continually adapt and evolve to maintain their competitive edge. Our CoE-based expert guidance empowers you to navigate digital transformation initiatives, harness emerging technologies, and streamline processes, all contributing to your sustained competitive advantage.</p>
          </div>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image3} alt={Image3} />

            </div>
            <br />
            <h3>Project Management
            </h3>
            <br />
            <p>Our PMO and project management services ensure your IT initiatives are completed successfully, on time, and within budget. We apply best practices and methodologies to minimize risks and ensure successful project delivery.</p>
          </div>
        </div>

      </div>
      {/* ?-----------------------Cards2------------------------------------------ */}

      <div className={StylesServices.main2}>
        <nav className={StylesServices.cont2}>
          <h1 className={StylesServices.head2}>
          Partnering with Test Yantra Global for your IT consulting needs offers numerous benefits
          </h1>
        </nav>
      </div>


      <div className={StylesServices.main3}>
        <div className={StylesServices.cont3}>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image1} alt={Image1} />
            </div>
            <br />
            <h3>Tailored Solutions</h3>
            <br />
            <p>Test Yantra Global provides IT consulting services that are customized to meet the unique needs of an organization.</p>
          </div>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image2} alt={Image2} />


            </div>
            <br />
            <h3>Cost Efficiency</h3>
            <br />
            <p>Our expert advisors identify cost-saving opportunities and optimize your IT investments, ensuring you get the most value from your technology spend.</p>
          </div>
          <div className={StylesServices.cards}>
            <div className={StylesServices.logo}>
              <img src={Image3} alt={Image3} />

            </div>
            <br />
            <h3>Risk Mitigation
            </h3>
            <br />
            <p>In an era where cybersecurity takes center stage, our services are dedicated to proactively mitigating risks and fortifying the protection of your sensitive data.</p>
          </div>
        </div>

      </div>
      {/* ?-----------article------------------------------------------- */}

      <div className={StylesServices.main5_}>
        <div className={StylesServices.cont6_}>
          <div className={StylesServices.num2}>
            <h1>Our Recent Articles</h1>
          </div>
        </div>
      </div>

      <div className={StylesServices.main7}>
        <div className={StylesServices.cont8}>
          <div className={StylesServices.art}>
            <div className={StylesServices.art_img}>
              <img className={StylesServices.imge} src={Image14} alt={Image14} />
            </div>
            <div className={StylesServices.art_img2}>
              <p>Blog | Software Testing</p>
              <h3>Comprehensive Guide to Developing Test Scripts for Software Testing</h3>
              <p>Effective software testing is essential for the delivery of high-quality software products. The development of test scripts is a critical...</p>
              <button className={StylesServices.btn2}>Read More<FaArrowRight /></button>
            </div>
          </div>
          <div className={StylesServices.art}>
            <div className={StylesServices.art_img}>
              <img className={StylesServices.imge} src={Image15} alt={Image15} />
            </div>
            <div className={StylesServices.art_img2}>
              <p>Blog | Categories of Tests</p>
              <h3>Guidelines for Writing Effective Unit Tests</h3>
              <p>Learn effective unit testing techniques to enhance code quality and development speed. Discover essential tools...</p>
              <button className={StylesServices.btn2}>Read More <FaArrowRight /></button>
            </div>

          </div>
          <div className={StylesServices.art}>
            <div className={StylesServices.art_img}>
              <img className={StylesServices.imge} src={Image16} alt={Image16} />

            </div>
            <div className={StylesServices.art_img2}>
              <p>Blog | Test Data</p>
              <h3>Automation Testing Tools: Selenium, Cypress, Playwright, Robot Framework vs. FireFlink</h3>
              <p>Dive into the specifics of renowned automation tools like Selenium, Cypress, Playwright, and Robot Framework...</p>
              <button className={StylesServices.btn2}>Read More<FaArrowRight /></button>
            </div>
          </div>
          </div>
          </div>
          {/* ?------------footer-------------------------------------------- */}
         <Footer/>
    </div>
  )
}

export default ITConsulting
