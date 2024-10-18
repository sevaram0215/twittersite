import { useMemo, useState } from "react"
import "./Rightsidepart3.scss"

const Right3data=[
    {
        id:1,
        img:"https://upload.wikimedia.org/wikipedia/commons/c/c0/Young_girl_smiling_in_sunshine_%282%29.jpg",
        pname:"mohan lal",
        username:"@mohanlal123"

    }
    ,    {
        id:2,
        img:"https://static.vecteezy.com/system/resources/thumbnails/040/961/712/small/ai-generated-female-portrait-in-profile-with-spring-and-summer-flowers-in-her-head-hair-on-pastel-blue-background-creative-international-women-s-history-month-day-banner-with-copy-space-photo.jpg",
        pname:"Raju",
        username:"@raju41512332"

    },
    {
        id:3,
        img:"https://plus.unsplash.com/premium_photo-1668895511243-1696733f4fcb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMGZhY2V8ZW58MHx8MHx8fDA%3D",
        pname:"Teja shree",
        username:"@mohanlal123"

    },
    {
        id:4,
        img:"https://m.media-amazon.com/images/M/MV5BNTc3N2EyNWItOTIwNC00ZTZmLWFlM2QtM2QzMjY2MWEzNzNjXkEyXkFqcGc@._V1_.jpg",
        pname:"Roshani",
        username:"@mohanlal123"

    }
    ,
    {
        id:5,
        img:"https://photosqn.com/wp-content/uploads/best-girls-dpz_112.webp",
        pname:"Roshani",
        username:"@mohanlal123"

    }

    ,
    {
        id:6,
        img:"https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp",
        pname:"Roshani",
        username:"@mohanlal123"

    }

    ,
    {
        id:7,
        img:"https://cdn.pixabay.com/photo/2022/09/01/05/59/best-cute-boy-wallpaper-7424798_1280.jpg",
        pname:"Roshani",
        username:"@mohanlal123"

    }

    ,
    {
        id:8,
        img:"https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?cs=srgb&dl=pexels-juanlaurio-1288182.jpg&fm=jpg",
        pname:"Roshani",
        username:"@mohanlal123"

    }



]

const RightsidePart3=()=>{
    const [showfollowmore,setShowFollowMore]=useState(0)
    const followArr=useMemo(()=>{
        let counter=showfollowmore + 1;
        let _Right3data=Right3data.slice(0,3*counter);
        return _Right3data;
    },[showfollowmore])
    
    const _followStatus= followArr?.length>=Right3data?.length;
    return(
        <div className="part3_main">
            <h4 style={{marginLeft:"10px"}}>Who to follow</h4>
         
                
                    <div className="m-2">
                    {followArr.map((item)=> {
                        return (
                        
                            <div key={item.id} className="follow_div d-flex justify-content-between" style={{paddingLeft:"10px"}}>
                                <div className="d-flex justify-content-start" style={{ gap:"7px"}} >
                                <img src={item.img} className="folowresimg" ></img>
                                <div className="follw_user_name">
                                    <h6>{item.pname}</h6>
                                    <p>{item.username}</p>
                                </div>
                                </div>
                                
                                <div className="follow_btn">
                                    <button className="follow_button ms-5">Follow</button>
                                </div>
                            </div>
                        )
                    })}
                    <div> <button onClick={()=>{setShowFollowMore((prev)=>(_followStatus? 0:prev+1))}}>
                        {_followStatus?"See less":"See more"}
                        </button></div>
                    </div>
      


        </div>
    )

}
export default RightsidePart3