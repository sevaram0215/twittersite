import Right1 from "../../../Pages/rightsideBar/Rightpart_1/RightPart1"
import RightPart2 from "../../../Pages/rightsideBar/Rightsidepart2/RightPart2"
import RightsidePart3 from "../../../Pages/rightsideBar/RightSidePart3/RightSidePart3"
import "./RightSide.scss"
const RightSide=()=>{
    return(
        <div className="rightMain_div">
           <div className="input_div">
           <input type="seacrh" placeholder="search"></input>
           </div>
<Right1/>
<RightPart2/>
<RightsidePart3/>
        </div>
    )
}
export default RightSide