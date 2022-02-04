import React from 'react'

const HomeBox = (props) => {
    return (
            <div className="col-sm">
                <div id="cell" className="px-4">
                    <h2 style={{color:props.color}} id="top">{props.heading}</h2>
                    <h2 style={{color:props.color}} id="mid">+{props.newdata.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                    <h2 style={{color:props.color}} id="bot">{props.ttdata.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                </div>
            </div>
    )
}

export default HomeBox;
