import styles from '../../styles/profile.module.css';
import React from 'react';

export default function profile() {
  return (
    <div>
      <div className={styles.card_box}>
        <div className={styles.card}>
          <div className={styles.profile}>
            <div>
              <h3 className="text-xl">축제소개</h3>
              Introduction Festival
            </div>
          </div>
          <p>
            축제 소개
          </p>
        </div>
      </div>

      <h1 className={styles.h1}>자기소개</h1>
      <h2 className={styles.h2}></h2>
      <div className={styles.card_box2}>
        <div className={styles.card2}>
          <div>
            중부대학교 고양캠퍼스에서 정보보호학을 전공하고있는 18학번
            박범주입니다.
            <br />
            <br />
            웹 어플리케이션 보안 수업을 들으며 웹에 대한 지식을 배워가고
            있습니다.
            <br />
            <br />
            현재 팀원들과 Fall Guys라는 팀으로 한국에 존재하는 다양한 축제
            문화들을 하나의 사이트에서 정보를 확인할 수 있는 사이트를 제작하고
            있습니다.
            <br />
            <br />
            팀원들과 한 학기동안 프로젝트를 훌륭히 제 역할을 수행해가며
            만족스러운 결과물을 낼 수 있도록 팀원들과 노력해가겠습니다.
          </div>
        </div>
      </div>
    </div>
  );
}
