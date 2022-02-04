import React from 'react'
import HomeTop from './components/HomeTop';
import HomeMid from './components/HomeMid';
import HomeTable from './components/HomeTable';
import HomeFooter from './components/HomeFooter';
import Navbar from './components/Navbar';
import Practice from './Practice';
const Home = () => {
    return (
        <>
        <Navbar/>
        
        <div className="container-fluid ">
        <Practice/>
              <HomeTop  /> 
              <HomeMid /> 
              <HomeTable/>
              <HomeFooter/>
        </div>
        </>
    )
}

export default Home;
