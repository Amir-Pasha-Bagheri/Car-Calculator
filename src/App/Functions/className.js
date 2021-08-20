export default function className(currentCar,car2,key) {
    if(key==="acceleration"||key==="price"||key==="Price for filling tank (Toman)"){
        if(currentCar<car2) return "more"
        return ""
    }
    else if(currentCar>car2) return "more"
    else return ""
}