import { Route, Routes,Link } from "react-router-dom";
import MainCont2 from "../mainContant/maincont2/Maincont2";
import MainCont3 from "../mainContant/maincont3/MainCont3";

const HomeData=()=>{
    return(
        <div className="container">
            <div  className="mainBar_1cont" style={{width:"100%",padding:"0",}}>

            <nav>
  <div class="nav nav-tabs w-100 d-flex justify-contain-between" id="nav-tab" role="tablist">
    <button class="nav-link active w-50 m-0.5" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">For you</button>
    <button class="nav-link w-50" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Following</button>
    </div>
</nav>




</div>

<div className="main_scrollbar">
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0"><MainCont2/></div>
  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0"><MainCont3 /></div>
 
</div>


</div>
        </div>
    )
}
export default HomeData;