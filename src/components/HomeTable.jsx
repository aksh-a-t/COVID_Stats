import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './HomeTable.css';
const HomeTable = () => {

    const [ata,setAta]=useState([]);
    async function getData(){
        const got_data= await axios.get('https://www.mohfw.gov.in/data/datanew.json');
        setAta(got_data.data);
        //console.log(got_data);
    }
    useEffect(()=>{
        getData();
    },[]);
    return (
        <div className="table-responsive MainTablediv">
            <table  className="table table-bor " id="MainTable">
                <thead>
                    <tr style={{position:'sticky'}}>
                        <th>State/UT</th>
                        <th>Confirmed </th>
                        <th>Active</th>
                        <th>New Cases</th>
                        <th>Recovered</th>
                        <th>New Recovered</th>
                        <th>Deceased</th>
                        <th>New Deceased</th>
                    </tr>
                </thead>
                <tbody>
                {
                    ata.map((value,index)=>{
                        if(index===36){
                            return ;
                        }
                        return(
                        <tr key={index}>
                                <td style={{backgroundColor:'rgb(73, 55, 107)'}}>{value.state_name.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} </td>
                                <td>{value.new_positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>{value.new_active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>+{(value.new_positive-value.positive).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>{value.new_cured.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>+{(value.new_cured-value.cured).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>{value.new_death.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                                <td>+{(value.new_death-value.death).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                            </tr>

                        )   
                    })
                }
                    
                </tbody>
            </table>
        </div>
    )
}

export default HomeTable;
