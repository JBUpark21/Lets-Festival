import Layout from '../components/Layout';
import Styles from '../styles/Home.module.css';
import Slider from 'react-slick';
// import Kmap from '../components/Kmap';
import Kakao from '../components/Kakao';

export default function Home() {
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
      {/* 슬라이드 */}

      <div className={Styles.slidecenter}>
        <div className={Styles.slidemain}>
          <div className={Styles.slide}>
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
      </div>

      {/* 한국 지도 */}
      {/* <Kmap></Kmap> */}
      <Kakao></Kakao>

      <h1 className={Styles.h1}>축제 유튜브 소개</h1>
      <h2 className={Styles.h2}></h2>
      <div className={Styles.youtubecenter}>
        <iframe
          src="https://www.youtube.com/embed/qrFnzqUsNXU"
          frameborder="0"
          allowfullscreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/RKnB-x5iHpM"
          frameborder="0"
          allowfullscreen
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/9fpaJvFKVQQ"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </Layout>
  );
}
