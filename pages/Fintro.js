import React from 'react';
import Styles from '../styles/intro.module.css';
import Layout from '../components/Layout';
import Slider from 'react-slick';
import Kakao_intro from '../components/Kakao_intro';

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
    <Layout title="Home">
      <div className={Styles.main}>
        <div className={Styles.left}>
          <div className={Styles.silde}>
            <Slider {...settings}>
              <div className={Styles.slideimgbox}>
                <h3>
                  <img className={Styles.slideimg} src="images/001.jpg"></img>
                </h3>
              </div>
              <div className={Styles.slideimgbox}>
                <h3>
                  <img className={Styles.slideimg} src="images/002.jpg"></img>
                </h3>
              </div>
              <div className={Styles.slideimgbox}>
                <h3>
                  <img className={Styles.slideimg} src="images/003.png"></img>
                </h3>
              </div>
              <div className={Styles.slideimgbox}>
                <h3>
                  <img className={Styles.slideimg} src="images/004.jpg"></img>
                </h3>
              </div>
              <div className={Styles.slideimgbox}>
                <h3>
                  <img className={Styles.slideimg} src="images/005.jpg"></img>
                </h3>
              </div>
              <div className={Styles.slideimgbox}>
                <h3>
                  <img className={Styles.slideimg} src="images/006.jpg"></img>
                </h3>
              </div>
            </Slider>
          </div>
        </div>
        <div className={Styles.right}>
          <div className={Styles.intro_a}>
            <div className={Styles.a_title}>축제 이름</div>
            <div className={Styles.a_write}>축제 상세 내용</div>
          </div>
          <div className={Styles.intro_b}></div>
          <div className={Styles.intro_c}>
            <div className={Styles.intro_c1}>
              <button className={Styles.btn}>행사장 안내도</button>
              <button className={Styles.btn}>축제 찾아가는 길</button>
              <button className={Styles.btn}>숙박시설/먹거리</button>
              <button className={Styles.btn}>주변 추천관광지</button>
            </div>
            <div className={Styles.intro_c2}>
              <Kakao_intro></Kakao_intro>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
