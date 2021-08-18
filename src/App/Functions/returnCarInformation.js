import React, { useEffect } from 'react'

export default function ReturnCarInformation({selectedCarInfo}) {
    useEffect(()=>{
        console.log(selectedCarInfo.name)
    })
    return (
        <div className="car-information">
            <p className="info-title"><span>Name</span> {selectedCarInfo.name}</p>
        </div>
    )
}
