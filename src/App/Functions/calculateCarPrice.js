export default function calculateCarPrice(car) {
    const distance = (car.tankVolume/car.fuel)*100
    return {
        fullTankMoveDistance : distance.toFixed(3) ,
        fullTankPrice : car.tankVolume * 3500
    }
}