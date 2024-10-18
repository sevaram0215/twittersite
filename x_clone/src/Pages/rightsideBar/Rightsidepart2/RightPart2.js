import { useMemo, useState } from "react"
import "./RightPart2.scss"

const Right2Data=[
    {
        id:1,
        title:"NCT WISH 'Steady' Album Release",
        img:"https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258",
        time:"5 hourse ago.",
        branch:"technology"
        
    },
    {
        id:2,
        title:"Joshua Attends Thom Browne Seongsu Event",
        img:"https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258",
        time:"5 hourse ago.",
        branch:"technology"
        
    },
    {
        id:3,
        title:"Jisoo's Dior PFW Ascendancy",
        img:"https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258",
        time:"5 hourse ago.",
        branch:"technology"
        
    },
    {
        id:4,
        title:"iphoen 16 series Launch in India",
        img:"https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258",
        time:"5 hourse ago.",
        branch:"technology"
        
    }
    ,
    {
        id:4,
        title:"iphoen 16 series Launch in India",
        img:"https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258",
        time:"5 hourse ago.",
        branch:"technology"
        
    }
    ,
    {
        id:4,
        title:"iphoen 16 series Launch in India",
        img:"https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258",
        time:"5 hourse ago.",
        branch:"technology"
        
    }
    ,
    {
        id:4,
        title:"iphoen 16 series Launch in India",
        img:"https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258",
        time:"5 hourse ago.",
        branch:"technology"
        
    }
]


const RightPart2 =()=>{
    const[showExplore,setShowexplore]=useState(0)
    const exploreArr=useMemo(()=>{
        let counter=showExplore +1;
        let _Right2data=Right2Data.slice(0,2*counter);
        return _Right2data;
    },[showExplore])
    const _exploreStatus=exploreArr?.length>=Right2Data?.length;

return(
    <div  className="rightmain_div" > 
    <div className="Expore_div">
        <h5>Explore </h5>
        <button className="Betabtn">Beta</button>
    </div>
 
        {
        Right2Data.map((ele)=>{
            return(
                <div key={ele.id}  className="apart_div pb-2 " style={{borderBottom:"1px solid grey"}}>
                <h6>
                    {ele.title}
                </h6>
                <div className="exploreimg_and_time">
                    <img style={{width:"35px", borderRadius:"40px"}}  src={ele.img} alt="img" />
                    <p >{ele.time}</p>
             
                    <p >{ele.branch}</p>
                </div>

                </div>
            )
        })
        
        }
        <div className="Show_more">
        <button className="btn text-primary"  onClick={()=>{setShowexplore((prev)=>(_exploreStatus? 0:prev+1))}}>{_exploreStatus? "see less":"see more"}</button>
        </div>
         </div>  
           
      
    
     
    

)
}
export default RightPart2