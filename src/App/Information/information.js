import React from 'react'
import './information.css'
import {cars} from '../Functions/carArray'
import checkSelectedCar from '../Functions/checkSelectedCar'
import ReturnCarInformation from '../Functions/returnCarInformation'

export default function Information({car}) {

    if(car){
        const checkExist = checkSelectedCar(car,cars)
        if(checkExist) return <ReturnCarInformation selectedCarInfo={checkExist} />
        return <h4 className="empty-input" style={{color:"brown"}}>Selected Car Is Curently Unavailable !</h4>   
    }
    return <h4 className="empty-input">Please Select a Car Too See Information</h4>

}
