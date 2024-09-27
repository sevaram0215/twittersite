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
        img:"https://upload.wikimedia.org/wikipedia/commons/c/c0/Young_girl_smiling_in_sunshine_%282%29.jpg",
        pname:"mohan lal",
        username:"@mohanlal123"

    },
    {
        id:3,
        img:"https://upload.wikimedia.org/wikipedia/commons/c/c0/Young_girl_smiling_in_sunshine_%282%29.jpg",
        pname:"mohan lal",
        username:"@mohanlal123"

    },
    {
        id:4,
        img:"https://upload.wikimedia.org/wikipedia/commons/c/c0/Young_girl_smiling_in_sunshine_%282%29.jpg",
        pname:"mohan lal",
        username:"@mohanlal123"

    }


]

const RightsidePart3=()=>{
    return(
        <div className="part3_main">
            <h4>who to follow</h4>
         
                
                    <div className="m-2">
                    {Right3data.map((item)=> {
                        return (
                        
                            <div key={item.id} className="d-flex justify-content-start">
                                <img src={item.img}style={{width:"44px", borderRadius:"40px"}} ></img>
                                <div className="follw_user_name">
                                    <h6>{item.pname}</h6>
                                    <p>{item.username}</p>
                                </div>
                                <div>
                                    <button className="follow_button ms-5">Follow</button>
                                </div>
                            </div>
                        )
                    })}
                    </div>
      


        </div>
    )

}
export default RightsidePart3