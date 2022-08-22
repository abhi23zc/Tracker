import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import './App.css'
import './covid.gif'
export default function App() {

    const [mydata, setmydata] = useState([
        {
            name: "Up"
        },

    ])

    const fetchapi = async () => {
        const data = await fetch("https://data.covid19india.org/data.json")
        const newdata = await data.json()
        console.log(newdata)
        setmydata(newdata.statewise)
    }

    useEffect(() => {
        fetchapi()

    })




    return (

        <>
            <div className="mycontainer">
                <div className="logo-container">
                    <img className="logo" src={require('./covid.gif')} alt="loading..." />
                    <img className="logo" src={require('./covid.gif')} alt="loading..." />

                </div>




                <div className='container'>
                    {
                        mydata.map(element => {
                            return (
                                <Card statename={element.state} cases={element.active} recovered={element.recovered} deaths={element.deaths} />
                            )
                        })
                    }
                </div>
            </div>
        </>

    )
}
