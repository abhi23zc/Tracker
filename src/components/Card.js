import React from 'react'

export default function card(props) {
    return (
        <>
        
        <div className="mycard">
            <h1>{props.statename}</h1>
            <h3 className="cases">Total Cases: {props.cases} </h3>
            <h3 className="death">Total Deaths: {props.deaths} </h3>
            <h3 className="recovered">Total Recovered: {props.recovered} </h3>


        </div>

        </>
    )
}
