import { Route, Routes } from "react-router-dom";
import "./Mainbar.scss"
import Explore from "../../../Pages/explore/Explore";
import HomeData from "../../../Pages/Home/Home";
import Mesage from "../../../Pages/Mesage/Mesage";
const MainBar = () => {
  return (
    < div className="mainBar_mainCont">
      
      <Routes>
        <Route path="/Explore" element={<Explore/>} />
        <Route path="/Home" element={<HomeData />}/>
        <Route path="/Mesage" element={<Mesage />}/>
        
      </Routes>
     
   
     
     
    
    </div>
  );
};
export default MainBar;
