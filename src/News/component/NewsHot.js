import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../css/News.css';

const CustomDot = ({ onClick, active, index, carouselState }) => {
  const { currentSlide } = carouselState;
  return (
    <li style={{ background: active ? "grey" : "initial" }}>
      <button
        style={{ background: active ? "grey" : "initial" }}
        onClick={() => onClick()}
      />
    </li>
  );
};

export default function news(){
    return(
      <div className="container-fluid row">
        <div className="news-center col-8 ">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderDotsOutside={false}
            responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
          items: 1,
          partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
            max: 1024,
            min: 464
            },
          items: 2,
          partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        >
        <div class="card card-wide-18 mt-3">
          <img src={require('../assets/images/nws.jpg')} class="card-img-top" alt="ราชบุรีจัดการประชุมเหล่ากาชาดภาค 4 ครั้งที่ 157"/>
            <div class="card-body">
              <p class="card-text">เมื่อวันที่ 16 ก.ย. 62 ที่โรงแรม ณ เวลา นายแผน วรรณเมธี เลขาธิการสภากาชาดไทย เป็นประธานเปิดการประชุมเหล่ากาชาดภาค 4 ครั้งที่ 157 </p>  
            </div>
        </div>
        <div class="card card-wide-18 mt-3">
          <img src={require('../assets/images/nws.jpg')} class="card-img-top" alt="ราชบุรีจัดการประชุมเหล่ากาชาดภาค 4 ครั้งที่ 157"/>
            <div class="card-body">
              <p class="card-text">เมื่อวันที่ 16 ก.ย. 62 ที่โรงแรม ณ เวลา นายแผน วรรณเมธี เลขาธิการสภากาชาดไทย เป็นประธานเปิดการประชุมเหล่ากาชาดภาค 4 ครั้งที่ 157 </p>  
            </div>
          </div>
        <div class="card card-wide-18 mt-3">
          <img src={require('../assets/images/nws.jpg')} class="card-img-top" alt="ราชบุรีจัดการประชุมเหล่ากาชาดภาค 4 ครั้งที่ 157"/>
            <div class="card-body">
              <p class="card-text">เมื่อวันที่ 16 ก.ย. 62 ที่โรงแรม ณ เวลา นายแผน วรรณเมธี เลขาธิการสภากาชาดไทย เป็นประธานเปิดการประชุมเหล่ากาชาดภาค 4 ครั้งที่ 157 </p>  
            </div>
          </div>
        <div class="card card-wide-18 mt-3">
          <img src={require('../assets/images/nws.jpg')} class="card-img-top" alt="ราชบุรีจัดการประชุมเหล่ากาชาดภาค 4 ครั้งที่ 157"/>
            <div class="card-body">
              <p class="card-text">เมื่อวันที่ 16 ก.ย. 62 ที่โรงแรม ณ เวลา นายแผน วรรณเมธี เลขาธิการสภากาชาดไทย เป็นประธานเปิดการประชุมเหล่ากาชาดภาค 4 ครั้งที่ 157 </p>  
            </div>
          </div>
        <div class="card card-wide-18 mt-3">
          <img src={require('../assets/images/nws.jpg')} class="card-img-top" alt="ราชบุรีจัดการประชุมเหล่ากาชาดภาค 4 ครั้งที่ 157"/>
            <div class="card-body">
              <p class="card-text">เมื่อวันที่ 16 ก.ย. 62 ที่โรงแรม ณ เวลา นายแผน วรรณเมธี เลขาธิการสภากาชาดไทย เป็นประธานเปิดการประชุมเหล่ากาชาดภาค 4 ครั้งที่ 157 </p>  </div>
            </div>
            </Carousel>
            <div className="col-2">
          </div>
        </div>
      </div>


    );
}