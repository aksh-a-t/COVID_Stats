import React from 'react'
import './VaccineTop.css';
const VaccineTop = () => {
    return (
        <div className="row show">
            <div style={{paddingTop:'100px'}} className="col-md">
                <h1 >Vaccination</h1>
                <p style={{fontSize:'22px',color:'white'}}>Vaccination is the administration of a vaccine to help the immune
                    system develop protection from a disease.
                </p>
                <a  style={{borderRadius:'40px',background:'rgb(155,120,222)',color:'white'}}
                 href="https://selfregistration.cowin.gov.in/" rel="noreferrer" target="_blank" className="btn ">
                 Get Vaccinated</a>

            </div>
            <div className="col-md">
                <img className="img-fluid"
                 src="https://covid-statistics-application.herokuapp.com/static/media/Vaccine.2c54eba7.gif"
                 alt="Covid" />
            </div>
        </div>
    )
}

export default VaccineTop;
