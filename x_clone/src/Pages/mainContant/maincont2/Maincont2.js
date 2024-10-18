import "./Maincont2.scss"
import { IoMdPhotos } from "react-icons/io";
import { MdGifBox } from "react-icons/md";
import { IoMdHappy } from "react-icons/io";
import { LuFolderClock } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaTimeline } from "react-icons/fa6";
import MainCont3 from "../maincont3/MainCont3";

const MainCont2=()=>{
    return(
        <>
    
<div className="MainCont_2">
    <div>
        <img  style={{width:"44px", borderRadius:"40px"}} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKqIg3pZGnGVuDbO7piYwe2EBzDMOcMohDv5sIWQ-tnD7ruRla"></img>
    </div>
    <div className="maincont2_child2">
        <div>
            <span>
                What is happenings?!
            </span>
        </div>
        <div  className="Maincont_2_logo">
            <div className="logo_div">
                <span><IoMdPhotos /></span>
                <span><MdGifBox /></span>
             <span><FaTimeline /></span>
             <span><IoMdHappy /></span>
             <span><LuFolderClock /></span>
             <span><FaLocationDot /></span>
             <span><FaBold /></span>
             <span><FaItalic /></span>
            </div>
            <div className="button_div">
            <button style={{ color:"white"}}>  Post</button>
            </div>
        </div>
    </div>

</div>
<div>
    <MainCont3/>
</div>
</>

    )
}
export default MainCont2