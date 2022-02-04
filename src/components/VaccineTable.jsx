import axios from 'axios'
import React, { useEffect, useState } from 'react'

const VaccineTable = () => {

    const [ata,setNewData]=useState([]);

    async function getData(){
        const no_data= await axios.get('https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports')
            //console.log(no_data.data.getBeneficiariesGroupBy);
            setNewData(no_data.data.getBeneficiariesGroupBy);
    }
    useEffect(()=>{
        getData();
    },[])
    return (
        <>
            <div  className="table-responsive MainTablediv">
                <table className="table">
                    <thead>
                        <tr>
                            <th>State/UT</th>
                            <th>1st Dose</th>
                            <th>2nd Dose</th>
                            <th>Total Doses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ata.map((value,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{value.state_name}</td>
                                        <td>{value.partial_vaccinated.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                        <td>{value.totally_vaccinated.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                        <td>{value.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>                
            </div>
        </>
    )
}

export default VaccineTable
