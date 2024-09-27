import "./MainCont3.scss"
import { FaComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoStatsChart } from "react-icons/io5";
import { GrSave } from "react-icons/gr";
const MaincontData=[


    {
        id:"1",
        pname:"Sevaram",
        proimg :"https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
        postimg :"https://media.istockphoto.com/id/1866732876/photo/creative-business-team-boardroom-brainstorming-with-a-scrum-master.jpg?s=2048x2048&w=is&k=20&c=D8kS-IwZACSkdGkWgM8gY23HgBAY5ESgt-D0uyIEruo=",
        postline : " this is the great and to the voilent of the part thankyou"
        
    },
    
    {
        id:"2",
        pname:"Raju",
        proimg :"https://media.istockphoto.com/id/1298623104/photo/happy-young-caucasian-boy-in-casual-outfit-with-arms-crossed-isolated-over-white-background.jpg?s=612x612&w=0&k=20&c=9fHNGNfGAIyviDNmBvsYc8tjhSd4sL3b-2I5gd9bMIg=",
        postimg :"https://images.unsplash.com/photo-1501927023255-9063be98970c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        postline : " this is the great and to the voilent of the part thankyou"
        
    },
        
    {
        id:"3",
        pname:"Ritika",
        proimg :"https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?cs=srgb&dl=pexels-minan1398-675920.jpg&fm=jpg",
        postimg :"https://images.unsplash.com/photo-1511968822213-92de73315bba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        postline : " this is the great and to the voilent of the part thankyou"
        
    }
    ,    
    {
        id:"4",
        pname:"sevaram",
        proimg :"https://cdn.pixabay.com/photo/2022/04/06/11/30/girl-7115394_1280.jpg",
        postimg :"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        postline : " this is the great and to the voilent of the part thankyou"
        
    }
        
]
const MainCont3=()=>{
    return(
    
        MaincontData.map((data)=>{
            return(
                <div  key={data.id} className="maincont3" >
                    <div className="imgpro_div">
                    <img src={data.proimg} style={{width:"44px", borderRadius:"40px", height:"40px"}}></img>
                    </div>
<div>
<div className="posting_div">
                    <div>
                        <span>{data.pname}</span>
                    </div>
                    <div>
                        <p>
                            {data.postline}
                        </p>
                    </div>
                    <div>
                        <img src={data.postimg} style={{width:"600px", borderRadius:"10px"}}></img>
                    </div>
                    <div className="comt_like_div">
                    <span><FaComment /> 1</span>
                    <span><FaRetweet />143</span>
                    <span><FcLike />255</span>
                    <span><IoStatsChart />222</span>
                    <span><GrSave />44</span>
                </div>

                </div>
</div>

            
        
                    
                </div>
           
            )
    })
   

    )
}
export default MainCont3