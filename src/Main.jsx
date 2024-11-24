import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Services from './Services/Services';
import Partners from './Partners/Partners';
import Contact from './Contact/Contact';
import Articles from './Articles/Articles';
import SoftwareDevelopment from './Services/SoftwareDevelopment';
import SoftwareEnhancement from './Services/SoftwareEnhancement';
import ITConsulting from './Services/ITConsulting';
import CrowdTesting from './Services/CrowdTesting';



const Main = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/services' element={<Services />}></Route>

                    <Route path='/partners' element={<Partners/>}></Route>

                    <Route path='/articles' element={<Articles />}></Route>

                    <Route path='/contact' element={<Contact />}></Route>
                    <Route path='/SoftwareDevelopment' element={<SoftwareDevelopment />}></Route>
                    <Route path='/SoftwareEnhancement' element={<SoftwareEnhancement />}></Route>
                    <Route path='/ITconsulting' element={<ITConsulting />}></Route>
                    <Route path='/CrowdTesting' element={<CrowdTesting />}></Route>

CrowdTesting
                </Routes>

            </Router>
        </div>
    )
}

export default Main
