export default function checkSelectedCar(selectedCar , carsArray) {
    const selectedCarArray = carsArray.filter(car=>car.name===selectedCar)
    if(selectedCarArray.length===0) return false
    return selectedCarArray[0]
}