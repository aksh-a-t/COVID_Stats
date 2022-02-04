import React, { useEffect, useState } from 'react'
import axios from 'axios';
import HomeBox from './HomeBox';
const HomeMid = () => {

    const [boxdata,setBoxdata]=useState({
        newconf:0,
        newacti:0,
        newreco:0,
        newdece:0,
        ttconf:0,
        ttacti:0,
        ttreco:0,
        ttdece:0,
        
    });
    
    async function getData(){
        const got_data= await axios.get('https://data.covid19india.org/v4/min/data.min.json');
        // console.log("!"+got_data.data.TT);
        setBoxdata((pre)=>{
            return{
                ...pre,
                newconf:got_data.data.TT.delta.confirmed,
                newreco:got_data.data.TT.delta.recovered,
                newdece:got_data.data.TT.delta.deceased,
                ttconf:got_data.data.TT.total.confirmed,
                ttreco:got_data.data.TT.total.recovered,
                ttdece:got_data.data.TT.total.deceased,
                newacti:pre.ttconf-pre.ttdece-pre.ttreco,
                ttacti:pre.ttconf-pre.ttreco-pre.ttdece,

            }
        });
        //console.log(got_data.data.TT);

    }
    useEffect(()=>{
        getData();
    },[boxdata.ttacti]);


    return (
        <>
        <div className=" jumbotron_div">
            <h1 style={{marginLeft:'2vw'}} id="jumbotron" className="container">
                Statistics (INDIA)
            </h1>
        </div>
        <div id="BoxRow" className="row ">
        <HomeBox color="red" heading="Confirmed"  newdata={boxdata.newconf} ttdata={boxdata.ttconf} />            
        <HomeBox color="blue" heading="Active" newdata={boxdata.newacti} ttdata={boxdata.ttacti}/>            
        <HomeBox color="green" heading="Recovered" newdata={boxdata.newreco} ttdata={boxdata.ttreco}/>            
        <HomeBox color="grey" heading="Deceased" newdata={boxdata.newdece} ttdata={boxdata.ttdece}/>
        </div>
        </>
    )
}

export default HomeMid;

