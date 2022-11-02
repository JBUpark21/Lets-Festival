import Head from "next/head";
import Styles from "../styles/Layout.module.css"
import Slider from "react-slick";


export default function Layout({ title, children }) {

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
    <>
      <Head>
        <title>{title ? title + " - Let's Festival" : "Let's Festival"}</title>
        <meta name="description" content="Nextjs" />
        <link rel="icon" href="/festival_decoration_party_celebration_holiday_flag_carnival_icon_150775.ico" />
      </Head>

      <div className={Styles.bar}>
        <header>
          <nav className={Styles.links}>
          
            <div className={Styles.gitimgbox}>
              <img className={Styles.gitimg} src="images/logo.png"></img>
            </div>

              <a href="/" className="">
              Let's Frestival</a>
              <a href="/">공지사항</a>
              <a href="/">축재소개</a>
              <a href="/">커뮤니티</a>
              <a href="/">로그인</a>
              <a href="/">Contect</a>
            </nav>
        </header>
      </div>

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
                <img className={Styles.slideimg} src="images/003.jpg"></img>
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

        <main className="container m-auto mt-4">{children}</main>

        <footer className="flex h-10 justify-center items-center shadow-inner bg-red-100">
          <p className={Styles.footer}>Copyright &copy; 2022 Powered by Team FallGuys</p>
        </footer>

      
    </>
  );
}
