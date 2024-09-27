import MainCont2 from "../../../Pages/mainContant/maincont2/Maincont2";
import MainCont3 from "../../../Pages/mainContant/maincont3/MainCont3";
import "./Mainbar.scss"
const MainBar = () => {
  return (
    < div className="mainBar_mainCont">
      <div  className="mainBar_1cont">

        <div>
          <span>For you</span>
        </div>
        <div>
          <span> Following</span>
        </div>
      </div>
   
      <div className="main_scrollbar">
      <MainCont2/> 
      <MainCont3/>
      </div>
    </div>
  );
};
export default MainBar;
