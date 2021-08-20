const units = {
    engineVolume: "cc",
    acceleration: "s",
    maxSpeed: "km/h",
    weight: "kg",
    fuel: "L/100km",
    tankVolume: "L",
    price : "Toman"
}
const extraTR = [
    {
        name : "Moves distance with full tank (km)",
        jsonName : "fullTankMoveDistance"
    },
    {
        name : "Price for filling tank (Toman)",
        jsonName : "fullTankPrice"
    }
]

export{
    units,
    extraTR
}