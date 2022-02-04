import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HomeBox from './HomeBox';
const VaccineMid = () => {

    const [daata,setDaata]=useState({
        today:'',
        total:'',
        today_aefi: '',
        today_dose_one:'',
        today_dose_two:'',        
        tot_dose_1:'',
        tot_dose_2:'',
        aefi:''
        });

    async function getData(){
        const gotData= await axios.get('https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports')
            setDaata(gotData.data.topBlock.vaccination);
            //console.log(gotData.data);
    }
    useEffect(()=>{
        getData();
    },[]);
    return (<>
        <div className="row" style={{paddingLeft:'5vw'}}>
            <HomeBox color="red" heading="Tot Vaccination Doses"
            newdata={daata.today}
            ttdata={daata.total} />
            <HomeBox color="blue" heading="Dose-1 Vaccinations"
            newdata={daata.today_dose_one}
            ttdata={daata.tot_dose_1} />
            <HomeBox color="green" heading="Dose-2 Vaccinations"
            newdata={daata.today_dose_two}
            ttdata={daata.tot_dose_2} />
            <HomeBox color="grey" heading="AEFI"
            newdata={daata.today_aefi}
            ttdata={daata.aefi} />

        </div>
    </>
    )
}

export default VaccineMid;
