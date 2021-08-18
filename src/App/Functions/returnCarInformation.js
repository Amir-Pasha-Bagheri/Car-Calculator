import React, { useEffect } from 'react'

export default function ReturnCarInformation({selectedCarInfo}) {
    useEffect(()=>{
        console.log(selectedCarInfo.name)
    })
    return (
        <div className="car-information">
            <p className="info-title"><span>Name</span> <span style={{color:'brown'}}>{selectedCarInfo.name}</span></p>
            <p className="info-title"><span>Engine Volume (cc)</span> {selectedCarInfo.engineVolume}</p>
            <p className="info-title"><span>Acceleration (s)</span> {selectedCarInfo.acceleration}</p>
            <p className="info-title"><span>Max Speed (km/h)</span> {selectedCarInfo.maxSpeed}</p>
            <p className="info-title"><span>Weight (kg)</span> {selectedCarInfo.weight}</p>
            <p className="info-title"><span>Fuel Consumtion (L/100km)</span> {selectedCarInfo.fuel}</p>
            <p className="info-title"><span>Tank Volume (L)</span> {selectedCarInfo.tankVolume}</p>
            <p className="info-title"><span>Price (Rial)</span> {selectedCarInfo.price}</p>
        </div>
    )
}