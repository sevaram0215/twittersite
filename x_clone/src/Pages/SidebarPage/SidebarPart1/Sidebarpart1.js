import "./Sidepart1.scss";
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
import { CiCircleMore } from "react-icons/ci";
import Sidebar3 from "../Sidepart3/Sidepart3";

const sideData = [
  {
    logo: <PiXLogo fontSize="45px" />,
    name: "",
  },
  {
    logo: <MdHomeFilled />,
    name: "Home",
  },
  {
    logo: <CiSearch />,
    name: "Explore",
  },
  {
    logo: <IoMdNotificationsOutline />,
    name: "Notification",
  },
  {
    logo: <MdOutlineMail />,
    name: "Message",
  },
  {
    logo: <VscDiffIgnored />,
    name: "Grok",
  },
  {
    logo: <PiXLogo />,
    name: "Premium",
  },
  {
    logo: <FaRegBookmark />,
    name: "Bookmarks",
  },
  {
    logo: <BsFillPeopleFill />,
    name: "Communities",
  },
  {
    logo: <MdOutlineFlashOn />,
    name: "Verified Orgs",
  },
  {
    logo: <IoPersonOutline />,
    name: "Profile",
  },
];

const SidebarPart1 = () => {
  return (
    <div className="sidelogoMainCont">
      {sideData.map((ele) => {
        return (
          <div className="logoCont" key={ele.name}>
            <div style={{ fontSize: "35px" }}>{ele.logo}</div>
            <div>{ele.name}</div>
          </div>
        );
      })}

   <div class="dropup-center dropup">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
     <div>
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
