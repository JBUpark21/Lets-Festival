import React from 'react';
import styles from '../styles/HomeIntro.module.css';
import Layout from '../components/Layout';

export default function HomeIntro() {
  return (
    <Layout title="HomeIntro">
      <div>
        <img className={styles.Image} src="images/HomeIntro.png"></img>
        <img className={styles.Image} src="images/HomeIntro2.png"></img>
      </div>
      <div className={styles.card_box}></div>
      <h1 className={styles.MainFont}>홈페이지 소개</h1>
      <h1 className={styles.MainFont2}>Let's Festival</h1>
      <h2 className={styles.h2}></h2>
      <h1 className={styles.MainFont3}>
        하나의 사이트에서 한국에 존재하는 모든 지역축제를 알아보세요.
        <br />
        <br />
        <br />
        <br />
        다양한 정보들을 하나의 사이트에서 손쉽게 얻어 축제들에 대한 관심도를
        높일 수 있습니다.
        <br />
        <br />
        <br />
        <br />
        축제 주변의 숙박시설과 음식시설을 다른 링크와 연계하여 여행 계획을 더
        쉽게 짤 수 있습니다.
        <br />
        <br />
        <br />
        <br />
        비회원 로그인을 지원하여 별점과 리뷰 등을 자유롭게 남길 수 있습니다.
      </h1>
    </Layout>
  );
}
