import React from 'react'
import * as AiIcons from 'react-icons/ai';
const HomeFooter = () => {
    return (
        <>
        <div  className=" jumbotron_div">
            <h4 style={{margin:'auto'}} id="jumbotron" >
                WE'RE IN THIS TOGETHER
            </h4>

            <h5 style={{margin:'auto',padding:'10px',marginTop:'10px',textAlign:'center',fontSize:'15px',color:'white'}}>
            We stand with everyone fighting on the frontlines</h5>
            <div style={{margin:'auto',textAlign:'center',fontSize:'30px'}}>
                <span><a className="github" href="https://github.com/aksh-a-t/COVID_Stats" target="_blank" rel="noopener noreferrer"><AiIcons.AiFillGithub/></a></span>
            </div>
        </div>


        </>
    )
}

export default HomeFooter;
