import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=08d2f8ea91351e2cdff88adc5567ac0f&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp