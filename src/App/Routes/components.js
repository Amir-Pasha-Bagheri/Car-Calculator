import Homepage from '../Home/homepage'
import Compare from '../Compare/compare'

const homepage = () =>{return <Homepage/>}
const compare = () =>{return <Compare/>}
const notfound = () =>{return(
    <div>Not Found</div>
)}

export{
    homepage,
    compare,
    notfound
}