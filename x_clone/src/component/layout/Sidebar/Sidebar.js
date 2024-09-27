import SidebarPart1 from "../../../Pages/SidebarPage/SidebarPart1/Sidebarpart1"
import SidePart2 from "../../../Pages/SidebarPage/SidebarPart2/Sidepart2"
import Sidebar3 from "../../../Pages/SidebarPage/Sidepart3/Sidepart3"
import './sidebar.scss'

const Sidebar=()=>{
    return(
<>
<div className="d-block" style={{display:"flex", flexDirection:"column"}}>
           <div className="sidebars">
            <SidebarPart1/>
            <SidePart2/>
            <Sidebar3/>
       
            </div> 
             </div>
         
            
</>
      
    )
}
export default Sidebar