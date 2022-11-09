import { useRouter } from "next/router";
import { useState } from "react";
import Styles from "../styles/Home.module.css"

export default function Kmap() {

  const router = useRouter();
  const [isRed, setIsRed] = useState(false);
  const [isRed1, setIsRed1] = useState(false);
  
  return (
    <div>
      <div className={Styles.korea}>
      <div className={Styles.koreamap}>
        <ul className={Styles.koreamapfontv1}>
          <li className={Styles.강원}>
            <div className="title">a</div></li>
          <li className={Styles.경기}>
          <div className="title1">b</div></li>
          <li className={Styles.경남}>c</li>
          <li className={Styles.경북}>d</li>
          <li className={Styles.광주}>e</li>
          <li className={Styles.대구}>f</li>
          <li className={Styles.대전}>g</li>
          <li className={Styles.부산}>h</li>
          <li className={Styles.서울}>i</li>
          <li className={Styles.세종}>j</li>
          <li className={Styles.울산}>k</li>
          <li className={Styles.인천}>l</li>
          <li className={Styles.전남}>m</li>
          <li className={Styles.전북}>n</li>
          <li className={Styles.제주}>o</li>
          <li className={Styles.충남}>p</li>
          <li className={Styles.충북}>q</li>
        </ul>
      </div>
    </div>

{/* 강원 버튼 */}

    <div className={Styles.button}>
      <button
        onClick={() => {
          setIsRed((prev) => !prev);
        }}>강원</button>
    </div>
      <style jsx >
        {`
          .title {
            color: ${isRed ? "red" : "gray"};
          }
        `}
      </style>
      

{/* 경기 버튼 */}

      <div className={Styles.button}>
        <button
          onClick={() => {
            setIsRed1((prev) => !prev);
          }}>경기</button>
      </div>
      
      <style jsx >
        {`
          .title1 {
            color: ${isRed1 ? "blue" : "gray"};
          }
        `}
      </style>
    

    </div>
  );
}