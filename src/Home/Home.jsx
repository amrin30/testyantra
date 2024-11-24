import React from 'react'
import HomeStyle from './Home.module.css'
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from "react-icons/fa";

import Image2 from '../Image/Img.png';
import Image3 from '../Image/Img2.png';
import Image4 from '../Image/Img3.png';
import Image5 from '../Image/Img4.png';
import Image6 from '../Image/Img5.png';
import Image7 from '../Image/img6.png';
import Image8 from '../Image/Img7.png';
import Image9 from '../Image/Img8.png';
import Image10 from '../Image/Img9.png';

import Image14 from '../Image/asset 13.jpeg';
import Image15 from '../Image/asset 14.jpeg';
import Image16 from '../Image/asset 15.jpeg';
import Image17 from '../Image/asset 21.png';
import Slide from './Slide';
import CountUp from 'react-countup';
import Footer from './../Footer/Footer';
import { MdPlayArrow } from "react-icons/md";
import { ImPower } from 'react-icons/im';
// import './Global.css'




const Home = () => {
  return (
    <div className={HomeStyle.head}>

      <div className={HomeStyle.main}>
        <div className={HomeStyle.cont}>
          <h1 className={HomeStyle.head2}>With Test Yantra Global</h1>
          <br />
          <p className={HomeStyle.ani}>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Accelarate to Business Efficienct..',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Achieve Digital Transformation..',
                1000,
                'Drive AI Automation Testing..',
                1000,
                'Build Custom Application..',
                1000,
                'Realize Cost-Effective Testing..',
                1000,
                'Unify Web,Mobile,API and DB Testing..',
                1000,
                'Access 1,000s of expert Test Engineers..',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </p >
          <br />
          <p className={HomeStyle.para}>Test Yantra Global's 5,000+ employees provide a range of innovative technology solutions to digitally transform your organization.</p>
              <br />
          <p className={HomeStyle.para}>From IT consulting, application design and development, to automated AI enabled test management platform that unifies web, android, iOS, API, and DB testing, we have the expertise, technology, experience, and tools to help transform your business.</p>
              <br />
          <button className={HomeStyle.btn}>Get Started Free<FaArrowRight /></button>
        </div>
        <div className={HomeStyle.cont2}>
          <Slide/>

        </div>
      </div >

      {/* --------------------------------------------------------------- */}
      <div className={HomeStyle.main2}>
        <nav className={HomeStyle.cont3}>
          <h1 className={HomeStyle.head3}>
            Leverage Test Yantra Global's range
            <br />
            of Professional Services
          </h1>
        </nav>
      </div>
      {/* --------------------------------------------------------------- */}
      <div className={HomeStyle.main3}>
        <div className={HomeStyle.cont4}>
          <div className={HomeStyle.cards}>
            <div className={HomeStyle.logo}>
              <img src={Image2} alt={Image2} />
            </div>
            <br />
            <h3>Software Testing
              <br /> Services (Taas)</h3>

              <br />
            <p>We offer cost-effective, reliable and scalable software testing services.</p>
          </div>
          <div className={HomeStyle.cards}>
            <div className={HomeStyle.logo}>
              <img src={Image3} alt={Image3} />


            </div>
            <br />
            <h3>IT Software Skills
              <br />Enhacement</h3>
              <br />
            <p>Our customized and curated training models help organizations elevate their IT quotient.</p>
          </div>
          <div className={HomeStyle.cards}>
            <div className={HomeStyle.logo}>
              <img src={Image4} alt={Image4} />

            </div>
            <br />
            <h3>Deployment &
              <br />
              Support Services
            </h3>
            <br />
            <p>Our team of experts help you craft a winning IT strategy for your organization.</p>
          </div>
          <div className={HomeStyle.cards}>
            <div className={HomeStyle.logo}>
              <img src={Image5} alt={Image5} />

            </div>
            <br />
            <h3>Software Design &
              <br />
              Development
            </h3>
            <br />
            <p>We deliver IT solutions in a wide variety of verticals and elevate businesses to the next level.</p>
          </div>
          <div className={HomeStyle.cards}>
            <div className={HomeStyle.logo}>
              <img src={Image6} alt={Image6} />

            </div>
            <br />
            <h3>Crowd Testing</h3>
            <br />
            <p>We offer comprehensive crowd-testing services, leveraging a global network of skilled testers.</p>
          </div>

        </div>

      </div>
      {/* --------------------------------------------------------------- */}
    
      <div className={HomeStyle.inner_image}>
          <div className={HomeStyle.inner_imagebox}>
          {/* <div className={HomeStyle.inner_circle}><MdPlayArrow  className={HomeStyle.icon} />  </div> */}

          <div className={HomeStyle.circles}>

            <div className={HomeStyle.circle1}> 

            </div>
             <div className={HomeStyle.circle2}></div>
             
          
          </div>
          <div className={HomeStyle.animationtrash}>
          <sec className={HomeStyle.inner_circle}><MdPlayArrow  className={HomeStyle.icon} /></sec>

           </div>

          </div>

</div>
      {/* --------------------------------------------------------------- */}
      <div className={HomeStyle.main5}>
        <div className={HomeStyle.cont6}>
          <h1 className={HomeStyle.num}>
            The numbers speak for themselves
          </h1>
        </div>
      </div>

      <div className={HomeStyle.main6}>
        <div className={HomeStyle.cont7}>
          <div className={HomeStyle.cards_2}>
            <div className={HomeStyle.logo2}>
              <img src={Image7} alt={Image7} />

            </div>
            <h3>
              <CountUp className={HomeStyle.count}
                end={6}
                duration={3}
              />
            </h3>
            <h3>Countries & Growing</h3>
          </div>
          <div className={HomeStyle.cards_2}>
            <div className={HomeStyle.logo2}>
              <img src={Image8} alt={Image8} />
            </div>
            <h3>
              <CountUp className={HomeStyle.count}
                end={3000}
                suffix='+'

                duration={3}
              />
            </h3>

            <h3>Clients Across Globe</h3>

          </div>
          <div className={HomeStyle.cards_2}>
            <div className={HomeStyle.logo2}>
              <img src={Image9} alt={Image9} />

            </div>
            <h3>
              <CountUp className={HomeStyle.count}
                end={5000}
                suffix='+'

                duration={3}
              />
            </h3>

            <h3>Total Team Members</h3>

          </div>
          <div className={HomeStyle.cards_2}>
            <div className={HomeStyle.logo2}>
              <img src={Image10} alt={Image10} />

            </div>
            <h3>
              <CountUp className={HomeStyle.count}
                end={12000}
                suffix='+'
                duration={3}
              />
            </h3>

            <h3>On Demand Test Engineers</h3>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------- */}
      <div className={HomeStyle.main5_}>
        <div className={HomeStyle.cont6_}>
          <div className={HomeStyle.num2}>
            <h1>Our Recent Articles</h1>
          </div>
        </div>
      </div>

      <div className={HomeStyle.main7}>
        <div className={HomeStyle.cont8}>
          <div className={HomeStyle.art}>
            <div className={HomeStyle.art_img}>
              <img className={HomeStyle.imge} src={Image14} alt={Image14} />
            </div>
            <div className={HomeStyle.art_img2}>
              <p>Blog | Software Testing</p>
              <h3>Comprehensive Guide to Developing Test Scripts for Software Testing</h3>
              <p>Effective software testing is essential for the delivery of high-quality software products. The development of test scripts is a critical...</p>
              <button className={HomeStyle.btn2}>Read More<FaArrowRight /></button>
            </div>
          </div>
          <div className={HomeStyle.art}>
            <div className={HomeStyle.art_img}>
              <img className={HomeStyle.imge} src={Image15} alt={Image15} />
            </div>
            <div className={HomeStyle.art_img2}>
              <p>Blog | Categories of Tests</p>
              <h3>Guidelines for Writing Effective Unit Tests</h3>
              <p>Learn effective unit testing techniques to enhance code quality and development speed. Discover essential tools...</p>
              <button className={HomeStyle.btn2}>Read More <FaArrowRight /></button>
            </div>

          </div>
          <div className={HomeStyle.art}>
            <div className={HomeStyle.art_img}>
              <img className={HomeStyle.imge} src={Image16} alt={Image16} />

            </div>
            <div className={HomeStyle.art_img2}>
              <p>Blog | Test Data</p>
              <h3>Automation Testing Tools: Selenium, Cypress, Playwright, Robot Framework vs. FireFlink</h3>
              <p>Dive into the specifics of renowned automation tools like Selenium, Cypress, Playwright, and Robot Framework...</p>
              <button className={HomeStyle.btn2}>Read More<FaArrowRight /></button>
            </div>
          </div>
        </div>
      </div>
      {/* ?--------Footer----------------------------------------------------------------- */}
     
<Footer/>

    </div>

  )
}

export default Home
