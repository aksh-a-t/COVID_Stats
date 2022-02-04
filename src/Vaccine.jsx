import React from 'react'
import Navbar from './components/Navbar'
import VaccineTop from './components/VaccineTop' 
import VaccineMid from './components/VaccineMid'
import VaccineTable from './components/VaccineTable'
import HomeFooter from './components/HomeFooter'
import Practice from './Practice'
const Vaccine = () => {
    return (
        <>
            <Navbar/>
        <div className="container-fluid">
        <Practice/>
        <VaccineTop/>
        <VaccineMid/>
        <VaccineTable/>
        <HomeFooter/>
        </div>
        </>
    )
}

export default Vaccine;
