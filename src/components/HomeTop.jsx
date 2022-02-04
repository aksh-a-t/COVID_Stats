import React from 'react'
import './HomeTop.css';
const HomeTop = () => {
    return (
        <div  className="row   p-5">
            <div className="col-md   mx-5 p-5 row_class">
                <h1 className=" bolder text-lg">COVID-19</h1>
                <p className="para">
                Coronavirus disease 2019 (COVID-19), also known as the coronavirus, or COVID, is a contagious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). The first known case was identified in Wuhan, 
                China, in December 2019. The
                 disease has since spread worldwide, leading to an ongoing pandemic.
                </p>
            </div> 
            <div className="col-md mt-5  py-3">
            <img className="img-fluid"
             src="https://raw.githubusercontent.com/sandhukaran28/covid_statistics/master/src/components/videos/main.gif"
              alt="Covid" />
            </div>
        </div>
    )
}

export default HomeTop;
