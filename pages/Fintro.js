import React from "react";
import Styles from "../styles/intro.module.css";
import Layout from "../components/Layout";
import Slider from "react-slick";
import Kakao_intro from "../components/Kakao_intro";
import MoreMap from "../components/MoreMap";

export default function Fintro() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Layout>
      <div className={Styles.intro_main_container}>
        <div className={Styles.intro_main_a}>
          <div className={Styles.intro_main_slide}>
            <Slider {...settings}>
              <div className={Styles.intro_main_slideimgbox}>
                <h3>
                  <img
                    className={Styles.intro_main_slideimg}
                    src="images/001.jpg"
                  ></img>
                </h3>
              </div>
              <div className={Styles.intro_main_slideimgbox}>
                <h3>
                  <img
                    className={Styles.intro_main_slideimg}
                    src="images/002.jpg"
                  ></img>
                </h3>
              </div>
              <div className={Styles.intro_main_slideimgbox}>
                <h3>
                  <img
                    className={Styles.intro_main_slideimg}
                    src="images/003.png"
                  ></img>
                </h3>
              </div>
              <div className={Styles.intro_main_slideimgbox}>
                <h3>
                  <img
                    className={Styles.intro_main_slideimg}
                    src="images/004.jpg"
                  ></img>
                </h3>
              </div>
              <div className={Styles.intro_main_slideimgbox}>
                <h3>
                  <img
                    className={Styles.intro_main_slideimg}
                    src="images/005.jpg"
                  ></img>
                </h3>
              </div>
              <div className={Styles.intro_main_slideimgbox}>
                <h3>
                  <img
                    className={Styles.intro_main_slideimg}
                    src="images/006.jpg"
                  ></img>
                </h3>
              </div>
            </Slider>
          </div>
        </div>

        <div className={Styles.intro_main_b}>
          <div className={Styles.intro_main_b_inner_container}>
            <div className={Styles.intro_main_b_inner_a}>
              <hi>제목</hi>
            </div>
            <div className={Styles.intro_main_b_inner_b}>
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
              <p>6</p>
              <p>7</p>
              <p>8</p>
            </div>
          </div>
        </div>

        <div className={Styles.intro_main_c}>
          <Kakao_intro></Kakao_intro>
        </div>

        <div className={Styles.intro_main_d}>
          <div className={Styles.intro_main_d_inner_a}>
            <MoreMap></MoreMap>
          </div>
        </div>
      </div>
    </Layout>
  );
}
