import { BsThreeDots } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import "./Sidepart3.scss";

const Sidebar3 = () => {
  return (
    <div className="userDetils mt-3 px-3">
      <div>
        <img
          style={{ width: "48px", borderRadius: "50%" ,aspectRatio:"1"}}
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTKqIg3pZGnGVuDbO7piYwe2EBzDMOcMohDv5sIWQ-tnD7ruRla"
          alt="profileimage"
        />
      </div>
      <div >
        <p style={{padding:'0px' , margin:'0px'}}>
          narendra modi
          <IoIosCheckmarkCircleOutline
          
            style={{ color: "#1D9BF0" }}
          />
        </p >
        <p style={{padding:'0px' , margin:'0px'}}>@narendraModi210</p>
      </div>
      <div>
               <BsThreeDots />
      </div>
    </div>
  );
};
export default Sidebar3;
