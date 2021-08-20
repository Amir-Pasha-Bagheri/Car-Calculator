import React, { useEffect, useState } from 'react'
import className from './className'
import { units , extraTR } from './units'
import { keyNamesForClient } from './keyNamesForTable'
import calculateCarPrice from './calculateCarPrice'

export default function ReturnCompareTable({firstCar,secondCar,keyNames}) {

    const [carPriceInfo1, seta] = useState({})
    const [carPriceInfo2, setb] = useState({})

    useEffect(()=>{
        seta(calculateCarPrice(firstCar))
        setb(calculateCarPrice(secondCar))
    },[firstCar,secondCar])
    return (
            <table className="compare-table">
                {keyNames.map(key=>
                    <tr className="compare-tr" key={key}>
                        <td>{keyNamesForClient[key]} {units[key]!==undefined?`(${units[key]})`:false}</td>
                        <td className={className(firstCar[key],secondCar[key],key)}>{firstCar[key]}</td>
                        <td className={className(secondCar[key],firstCar[key],key)}>{secondCar[key]}</td>
                    </tr>)}
                {extraTR.map((tr,index)=>
                    <tr key={index} className="compare-tr">
                        <td>{tr.name}</td>
                        <td className={className(carPriceInfo1[tr.jsonName],carPriceInfo2[tr.jsonName],tr.name)}>{carPriceInfo1[tr.jsonName]}</td>
                        <td className={className(carPriceInfo2[tr.jsonName],carPriceInfo1[tr.jsonName],tr.name)}>{carPriceInfo2[tr.jsonName]}</td>
                    </tr>)}
            </table>
    )
}
