import React, { useState } from "react";
import "./Explore.scss";
import { CiSettings } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Tranding from "../Tranding/Tranding";
import TrandingData from "../News/News";
import Sport from "../sports/Sport";

const ExploreforYouData = [
  {
    id: 1,
    title: " Karina jooins louis oritgale mays NCT WISH 'Steady' Album Release",
    img: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    time: "5 hourse ago.",
    branch: "tranding now",
    trandingimage:
      "https://images.sbs.com.au/dims4/default/e8abcae/2147483647/strip/true/crop/1778x1000+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2F29%2F91%2F83af9a15477cbbfcb7953c4150da%2Fmes-put.jpg",
  },
  {
    id: 2,
    title: "Joshua Attends Thom Browne Seongsu Event",
    img: "https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp",
    time: "5 hourse ago.",
    branch: "tranding now",
    trandingimage:
      "https://www.worldphoto.org/sites/default/files/styles/field_gallery_images-masonry/public/gallery/images/4339385/cdbb4fcc687e58d234438d74a4ab98cd._DSC9695%2520copy%25202.jpg?itok=eQsvOoi2",
  },
  {
    id: 3,
    title: "Jisoo's Dior PFW Ascendancy",
    img: "https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small_2x/beautiful-girl-with-autumn-leaves-photo.jpg",
    time: "5 hourse ago.",
    branch: "tranding now",
    trandingimage:
      "https://community.foap.com/wp-content/uploads/2023/03/Foap-a_macro_portrait-710x434.jpg",
  },
  {
    id: 4,
    title: "iphoen 16 series Launch in India",
    img: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
    time: "5 hourse ago.",
    branch: "tranding now",
    trandingimage:
      "https://images.sbs.com.au/dims4/default/e8abcae/2147483647/strip/true/crop/1778x1000+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2F29%2F91%2F83af9a15477cbbfcb7953c4150da%2Fmes-put.jpg",
  },
  {
    id: 5,
    title: " Karina jooins louis oritgale mays NCT WISH 'Steady' Album Release",
    img: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
    time: "5 hourse ago.",
    branch: "tranding now",
    trandingimage:
      "https://images.sbs.com.au/dims4/default/e8abcae/2147483647/strip/true/crop/1778x1000+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2F29%2F91%2F83af9a15477cbbfcb7953c4150da%2Fmes-put.jpg",
  },
  {
    id: 6,
    title: " Karina jooins louis oritgale mays NCT WISH 'Steady' Album Release",
    img: "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg",
    time: "5 hourse ago.",
    branch: "tranding now",
    trandingimage:
      "https://images.sbs.com.au/dims4/default/e8abcae/2147483647/strip/true/crop/1778x1000+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2F29%2F91%2F83af9a15477cbbfcb7953c4150da%2Fmes-put.jpg",
  },
];
const Explore = () => {
  const [showbackbutton, setShowbutton] = useState(false);
  return (
    <div className="main_div">
      <div className="search_div">
        {showbackbutton && (
          <button
            onClick={() => {
              setShowbutton(false);
            }}
          >
            {" "}
            <IoMdArrowBack />
          </button>
        )}

        <div className={`search_input_div ${showbackbutton ? `focused ` : ""}`}>
          {" "}
          <FaSearch  className=""/>
          <input onClick={()=>{setShowbutton(true)}} type="seacrh" placeholder="search"></input>
        </div>
        <div>
          {!showbackbutton &&   <CiSettings style={{ fontSize: "25px",  color:"red" }} /> }
        
        </div>
      </div>

      <div className="navtab_cont">
        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              foryou
            </button>
          </li>

          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-tranding-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-tranding"
              type="button"
              role="tab"
              aria-controls="pills-tranding"
              aria-selected="false"
            >
              tranding
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-news-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-news"
              type="button"
              role="tab"
              aria-controls="pills-news"
              aria-selected="false"
            >
              news
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-sports-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-sports"
              type="button"
              role="tab"
              aria-controls="pills-sports"
              aria-selected="false"
            >
              sports
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-Entertment-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-Entertment"
              type="button"
              role="tab"
              aria-controls="pills-Entertment"
              aria-selected="false"
            >
              Entertment
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-polictical-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-polictical"
              type="button"
              role="tab"
              aria-controls="pills-polictical"
              aria-selected="false"
            >
              polictical
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div
            class="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            tabindex="0"
          >
            {" "}
            <div className="img_div" style={{ width: "98%", margin: "auto" }}>
              <img
                style={{ width: "100%", borderRadius: "15px" }}
                src="https://assets.newatlas.com/dims4/default/8f8427f/2147483647/strip/true/crop/2598x1298+0+0/resize/1920x959!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2F8a%2F6a%2F059802254ca99036c6f64e54f368%2F5279-18015-robertocorinaldesi-italy-nationalawards-2020.jpg"
              ></img>
            </div>
            <div>
              {ExploreforYouData.map((ele) => {
                return (
                  <div className="trading_div">
                    <div
                      key={ele.id}
                      className="apart_div pb-2 "
                      style={{ borderBottom: "1px solid grey" }}
                    >
                      <h6>{ele.title}</h6>
                      <div className="exploreimg_and_time">
                        <img
                          style={{ width: "35px", borderRadius: "40px" }}
                          src={ele.img}
                          alt="img"
                        />
                        <p>{ele.time}</p>

                        <p>{ele.branch}</p>
                      </div>
                    </div>
                    <div>
                      <img
                        style={{
                          width: "75px",
                          borderRadius: "10px",
                          height: "70px",
                        }}
                        src={ele.trandingimage}
                        alt="img"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="pills-tranding"
            role="tabpanel"
            aria-labelledby="pills-tranding-tab"
            tabindex="0"
          >
            {" "}
            <Tranding />{" "}
          </div>
          <div
            class="tab-pane fade"
            id="pills-news"
            role="tabpanel"
            aria-labelledby="pills-news-tab"
            tabindex="0"
          >
            <TrandingData />
          </div>
          <div
            class="tab-pane fade"
            id="pills-sports"
            role="tabpanel"
            aria-labelledby="pills-sports-tab"
            tabindex="0"
          >
            <Sport />
          </div>
          <div
            class="tab-pane fade"
            id="pills-Entertment"
            role="tabpanel"
            aria-labelledby="pills-Entertment-tab"
            tabindex="0"
          >
            Entertment.
          </div>
          <div
            class="tab-pane fade"
            id="pills-polictical"
            role="tabpanel"
            aria-labelledby="pills-polictical-tab"
            tabindex="0"
          >
            polictical.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
