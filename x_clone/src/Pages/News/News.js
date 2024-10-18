import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import "./News.scss"
const TrandingNewsData = [
  {
    id: 1,
    Number: "1",
    hastage: "#Apjkalam",
    post: "74k posts",
  },
  {
    id: 2,
    Number: "2",
    hastage: "#Kritisanan",
    post: "7k posts",
  },
  {
    id: 3,
    Number: "3",
    hastage: "#Modi",
    post: "55k posts",
  },
  {
    id: 4,
    Number: "4",
    hastage: "#MohanLal",
    post: "41k posts",
  },
  {
    id: 5,
    Number: "1",
    hastage: "#Apjkalam",
    post: "74k posts",
  },
  
  {
    id: 5,
    Number: "1",
    hastage: "#Apjkalam",
    post: "74k posts",
  }
  ,
  {
    id: 5,
    Number: "1",
    hastage: "#Apjkalam",
    post: "74k posts",
  }
  ,
  {
    id: 5,
    Number: "1",
    hastage: "#Apjkalam",
    post: "74k posts",
  }
  ,
  {
    id: 5,
    Number: "1",
    hastage: "#Apjkalam",
    post: "74k posts",
  }
  ,
  {
    id: 5,
    Number: "1",
    hastage: "#Apjkalam",
    post: "74k posts",
  }
  ,
  {
    id: 5,
    Number: "1",
    hastage: "#Apjkalam",
    post: "74k posts",
  }
  ,
  {
    id: 5,
    Number: "1",
    hastage: "#Apjkalam",
    post: "74k posts",
  }
  ,
  {
    id: 5,
    Number: "1",
    hastage: "#Apjkalam",
    post: "74k posts",
  },
  {
    id: 5,
    Number: "1",
    hastage: "#Apjkalam",
    post: "74k posts",
  }
  
];
const TrandingData = () => {
  return (
    <div className="main_tranding_div">
          <h3>Trends</h3>
      {TrandingNewsData.map((ele) => {
        return (
          <div key={ele.id} className='hastage_trade'>
          
            <div>
                <p>{ele.Number} .tranding</p>
                <p>{ele.hastage}</p>
                <p>{ele.post}</p>
                </div>
            <div><BsThreeDots /></div>
           </div>
        );
      })}
    </div>
  );
};

export default TrandingData;