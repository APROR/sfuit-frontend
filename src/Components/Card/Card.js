import React, { useEffect, useState } from 'react'
import './Card.css'
import io from "socket.io-client"
import { BACKEND_URL } from '../../backendurl'
var mqtt    = require('mqtt');
var options = {
    protocol: 'mqtts',
    // clientId uniquely identifies client
    // choose any string you wish
    clientId: 'b0908853'    
};
var client  = mqtt.connect('mqtt://broker.mqtt-dashboard.com:1883', options);

export default function Card() {
    const sfuit=localStorage.getItem("sfuit")||null;
    const [data,setData]=useState({})
    
    useEffect(()=>{
        const socket=io.connect(BACKEND_URL)
        socket.emit("pop","hello")
        socket.on("pop",payload=>{
            console.log("DAAA",payload)
            // setData(payload);
        });
    },[])
    return (
        <div className="total">
            <div className="container">
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2 className="back"><i class="fas fa-heartbeat"></i></h2>
                            <h3 className="title">Pulse</h3>
                            <p className="value">{data?.BPM} BPM</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2 className="back">02</h2>
                            <h3 className="title">Oxygen Levels</h3>
                            <p className="value">{data?.SpO2} %</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2 className="back"><i class="fas fa-temperature-low"></i>-</h2>
                            <h3 className="title">Temperature</h3>
                            <p className="value">{data?.Temperature} F</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}