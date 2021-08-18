import React, { useRef, useState } from 'react'
import Information from '../Information/information'
import './homepage.css'
import {cars} from '../Functions/carArray'
import Navbar from '../Navbar/navbar'

export default function Homapage() {

    const [selectedCar , setSelectedCar] = useState(null)
    const selectedTagValue = useRef()

    return (
        <React.Fragment>

            <input list="Cars" ref={selectedTagValue} className="car-select-tag" placeholder="Select Your Car" />
            <datalist id="Cars">
                {cars.map(car=><option key={car.name} value={car.name}>{car.name}</option>)}
            </datalist>

            <button className="confirm-car" onClick={()=>setSelectedCar(selectedTagValue.current.value===''?null:selectedTagValue.current.value)}>Confirm Car</button>
            
            <Information car={selectedCar} />

            <Navbar/>

        </React.Fragment>
    )
}