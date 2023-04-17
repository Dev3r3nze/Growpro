import React, { useState,useRef } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination]);

const VideoSection = () => {
  const [pos, setPos] = useState(0);

  const videos = [
    {
      id: 0,
      // img: "../../Recursos/VideoPreview.png",
      img: "https://i.ytimg.com/vi/kF0OtEH8Lo0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDT-NOt-o_JvXJ7KwlyrxgwpsQSgQ",
      iframe: (
        <iframe
          width="800"
          height="500"
          src="https://www.youtube.com/embed/kF0OtEH8Lo0"
          title="Sidney Australia - Maria Jose - Testimonio"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      alt: "Sidney Australia - Maria Jose - Testimonio",
      video: "https://www.youtube.com/embed/kF0OtEH8Lo0"
    },
    {
      id: 1,
      img: "https://i.ytimg.com/vi/A1UgYB2zVWg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCv__pJq1XuxYNGfN70bueeqgsxGQ",
      iframe: (
        <iframe
          width="800"
          height="500"
          src="https://www.youtube.com/embed/A1UgYB2zVWg"
          title="Malta - Yonna Bernal Testimonio"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ),
      alt: "Malta - Yonna Bernal Testimonio",
      video: "https://www.youtube.com/embed/A1UgYB2zVWg"
    },
  ];

  function MostrarVideo(pos) {
    setPos(pos)
    var video = document.getElementById("videoFullScreen");
    video.style.display = "flex";
  }
  function OcultarVideo() {
    var video = document.getElementById("videoFullScreen");
    video.style.display = "none";
  }

  

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="w-100">
      {/* Text */}
      <div id="videoText">
        <p id="titleVideo" className="textGrande textFino">
          Conoce más opiniones de los <strong>grower por el mundo</strong>
        </p>
        <p id="descVideo" className="textMediano textFino">
          ¿Aún tienes dudas? Deja que los que ya han pasado por esta experiencia
          te cuenten lo que han vivido
        </p>
      </div>

      {/*Video  */}
      {/* <div id="videoDiv">
          <img
            src={videos[pos].img}
            onClick={() => MostrarVideo()}
            alt=""
            className="ancho"
          />

          
          <div>
            <img src="Recursos/prevVideo.png" alt="" onClick={() => PrevVideo()}/>
            <img src="Recursos/nextVideo.png" alt="" onClick={() => NextVideo()}/>
          </div>
        </div> */}
      <div className="row" id="videoDiv">
        <div className="col-12 justify-content-end">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            swipeHandler={true}
            className="col-12"
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="slide-container">
                  <img src={video.img} alt={video.alt} onClick={() => MostrarVideo(video.id)}/>
                </div>
              </SwiperSlide>
            ))}
           <div>
            <div class="swiper-button-prev swiper-button-disabled" ref={navigationPrevRef}></div>
            <div class="swiper-button-next" ref={navigationNextRef}></div>
           </div>
          </Swiper>
        </div>
        
      </div>

      {/* Video Full Screen */}
      <div id="videoFullScreen" className="ancho">
        <div id="videoContainer" className="ancho">
          <div id="videoClose" onClick={() => OcultarVideo()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              viewBox="0 0 24 24"
              width="26"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none"></path>
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
            </svg>
          </div>
          {videos[pos].iframe}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
