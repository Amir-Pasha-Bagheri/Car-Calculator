import React from 'react'
import checkSelectedCar from '../Functions/checkSelectedCar'
import {cars} from '../Functions/carArray'
import '../Information/information.css'
import ReturnCompareTable from '../Functions/returnCompareTable'

export default function CompareTable({firstCar,secondCar}) {
    if(firstCar&&secondCar){
        const firstCarCheckExist = checkSelectedCar(firstCar,cars)
        const secondCarCheckExist = checkSelectedCar(secondCar,cars)
        if(firstCarCheckExist&&secondCarCheckExist) return <ReturnCompareTable firstCar={firstCarCheckExist} secondCar={secondCarCheckExist} keyNames={Object.keys(cars[0])} />
        return <h4 className="empty-input" style={{color:"brown"}}>{firstCarCheckExist?`"${secondCar}" is`:secondCarCheckExist?`"${firstCar}" is`:`"${firstCar} and ${secondCar}" are`} Curently Unavailable !</h4>   
    }
    return <h4 className="empty-input">Please Select Two Cars Too See Information</h4>

}
