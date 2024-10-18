import "./Sidepart1.scss";
import { CiCircleMore } from "react-icons/ci";
import {Link, useLocation} from "react-router-dom"
import { PiXLogo } from "react-icons/pi";
import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { VscDiffIgnored } from "react-icons/vsc";
import { FaRegBookmark } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineFlashOn } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";


const sideData = [
  {
    logo: <PiXLogo fontSize="45px" />,
    name: "",
  },
  {
    logo: <MdHomeFilled />,
    name: "Home",
    link:"/home"
  },
  {
    logo: <CiSearch />,
    name: "Explore",
      link:"/Explore"
  },
  {
    logo: <IoMdNotificationsOutline />,
    name: "Notification",
    link:"/Notification"
  },
  {
    logo: <MdOutlineMail />,
    name: "Message",
    link:"/Mesage"
  },
  {
    logo: <VscDiffIgnored />,
    name: "Grok",
    link:"/Grok"
  },
  {
    logo: <PiXLogo />,
    name: "Premium",
    link:"/Premium"
  },
  {
    logo: <FaRegBookmark />,
    name: "Bookmarks",
    link:"/Bookmarks"
  },
  {
    logo: <BsFillPeopleFill />,
    name: "Communities",
    link:"/Communities"
  },
  {
    logo: <MdOutlineFlashOn />,
    name: "Verified Orgs",
    link:"/Verified"
  },
  {
    logo: <IoPersonOutline />,
    name: "Profile",
    link:"/Profile"
 
  },
];

const SidebarPart1 = () => {
 const location=useLocation()

  return (
    <div className="sidelogoMainCont">
      {sideData.map((ele) => {
        return (
          <div className={`logoCont ${location.pathname === ele.link && 'active'}`} key={ele.name}>
            <Link className="d-flex gap-3 px-2 rounded py-2 text-white align-items-center text-decoration-none" to={ele.link}  >
            <div style={{ fontSize: "30px" }}>{ele.logo}</div>
            <div className="mt-2">{ele.name}</div></Link>
         
          </div>
        );
      })}

   <div class="dropup-center dropup">
  <button class="btn btn-secondary w-75" type="button" data-bs-toggle="dropdown" aria-expanded="false">
     <div  className="more_div">
     <CiCircleMore style={{fontSize:"40PX"}} /> More
        </div>
  </button>
  <ul class="dropdown-menu icon-none">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>

    </div>
  );
};
export default SidebarPart1;
