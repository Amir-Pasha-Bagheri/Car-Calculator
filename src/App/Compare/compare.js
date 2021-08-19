import React, { useRef, useState } from 'react'
import {cars} from '../Functions/carArray'
import './compare.css'
import Navbar from '../Navbar/navbar'
import CompareTable from '../Compare Table/compareTable'

export default function Compare() {

    const [firstCar , setFirstCar] = useState(null)
    const [secondCar , setSecondCar] = useState(null)

    const firstInputRef = useRef()
    const secondInputRef = useRef()

    function submitCars(e){
        e.preventDefault()
        setFirstCar(firstInputRef.current.value===''?null:firstInputRef.current.value.trim())
        setSecondCar(secondInputRef.current.value===''?null:secondInputRef.current.value.trim())
    }
    return (
        <React.Fragment>
            <form method="POST"  onSubmit={submitCars}>
                <input list="Cars" ref={firstInputRef} className="first-car-select-tag" placeholder="Select Your First Car" required />
                <datalist id="Cars">
                    {cars.map(car=><option key={car.name} value={car.name}>{car.name}</option>)}
                </datalist>

                <input list="Cars" ref={secondInputRef} className="second-car-select-tag" placeholder="Select Your Second Car" required />
                <datalist id="Cars">
                    {cars.map(car=><option key={car.name} value={car.name}>{car.name}</option>)}
                </datalist>
                <br/>
                <button className="confirm-compare-car" type="submit" >Confirm Car</button>
            </form>

            <CompareTable firstCar={firstCar} secondCar={secondCar} />

            <Navbar component="Cars Information" path="/" />
        </React.Fragment>
    )
}