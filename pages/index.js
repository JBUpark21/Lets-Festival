import Layout from "../components/Layout";
import Styles from "../styles/Home.module.css";
import Slider from "react-slick";
import Kakao from "../components/Kakao";

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
                <figure className={Styles.fig}>
                  <figcaption>축제 사진</figcaption>
                </figure>
              </div>
              <div className={Styles.slideimgbox}>
                <h3>
                  <img className={Styles.slideimg} src="images/002.jpg"></img>
                </h3>
                <figure className={Styles.fig}>
                  <figcaption>축제 사진</figcaption>
                </figure>
              </div>
              <div className={Styles.slideimgbox}>
                <h3>
                  <img className={Styles.slideimg} src="images/003.png"></img>
                </h3>
                <figure className={Styles.fig}>
                  <figcaption>축제 사진</figcaption>
                </figure>
              </div>
              <div className={Styles.slideimgbox}>
                <h3>
                  <img className={Styles.slideimg} src="images/004.jpg"></img>
                </h3>
                <figure className={Styles.fig}>
                  <figcaption>축제 사진</figcaption>
                </figure>
              </div>
              <div className={Styles.slideimgbox}>
                <h3>
                  <img className={Styles.slideimg} src="images/005.jpg"></img>
                </h3>
                <figure className={Styles.fig}>
                  <figcaption>축제 사진</figcaption>
                </figure>
              </div>
              <div className={Styles.slideimgbox}>
                <h3>
                  <img className={Styles.slideimg} src="images/006.jpg"></img>
                </h3>
                <figure className={Styles.fig}>
                  <figcaption>축제 사진</figcaption>
                </figure>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      {/* 한국 지도 */}
      <Kakao></Kakao>

      {/* 축제 유튜브 링크  */}
      <h1 className={Styles.Youtube_title}>축제 유튜브 소개</h1>
      <h2 className={Styles.Youtube_title_a}></h2>
      <div className={Styles.Youtube_center}>
        <iframe
          src="https://www.youtube.com/embed/qrFnzqUsNXU"
          frameborder="0"
          allowfullscreen
          className={Styles.Youtube_box}
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/RKnB-x5iHpM"
          frameborder="0"
          allowfullscreen
          className={Styles.Youtube_box}
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/9fpaJvFKVQQ"
          frameborder="0"
          allowfullscreen
          className={Styles.Youtube_box}
        ></iframe>
      </div>
    </Layout>
  );
}
