import React from 'react'

export default function ReturnCompareTable({firstCar,secondCar,keyNames}) {
    function checkValue(currentCar,car2,key){
        if(key==="acceleration"&&key==="price"){
              console.log(currentCar)
        }
    }
    return (
        <table className="compare-table">
            {keyNames.map(key=>
                <tr className="compare-tr" key={key}>
                    <td>{key}</td>
                    <td className={checkValue(firstCar[key],secondCar[key],key)}>{firstCar[key]}</td>
                    <td >{secondCar[key]}</td>
                </tr>)}
        </table>
    )
}
