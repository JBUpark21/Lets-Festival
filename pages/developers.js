import React from "react";
import Layout from "../components/Layout";
import Profile from "../styles/developer.module.css";

export default function developers() {
  return (
    <Layout title="Developers">
      <div className={Profile.mainbox}>
        {/* 첫번째  */}
        <button className={Profile.buttonbox}>
          <div className={Profile.profilebox1}>
            <div className={Profile.profileboxbox}>
              <div>
                <div className={Profile.textheader}>
                  <div>정보보호학과</div>
                  <div>학번</div>
                </div>
                <div className={Profile.textbody}>류 재 원</div>
              </div>
              <div className={Profile.textfooter}>
                <div className={Profile.text}>github</div>
                {/* <div className={Profile.textheader}>호</div> */}
              </div>
            </div>
          </div>
          <div className={Profile.CDbox1}></div>
        </button>
        {/* 두번째  */}
        <div className={Profile.marginbox}></div>
        <button className={Profile.buttonbox}>
          <div className={Profile.profilebox2}>
            <div className={Profile.profileboxbox}>
              <div>
                <div className={Profile.textheader}>
                  <div>정보보호학과</div>
                  <div>91812103</div>
                </div>
                <div className={Profile.textbody}>김 다 혁</div>
              </div>
              <div className={Profile.textfooter}>
                <div className={Profile.text}>github</div>
                {/* <div className={Profile.textheader}>호</div> */}
              </div>
            </div>
          </div>
          <div className={Profile.CDbox2}></div>
        </button>
        {/* 세번째  */}
        <button className={Profile.buttonbox}>
          <div className={Profile.profilebox3}>
            <div className={Profile.profileboxbox}>
              <div>
                <div className={Profile.textheader}>
                  <div>정보보호학과</div>
                  <div>학번</div>
                </div>
                <div className={Profile.textbody}>손 진 빈</div>
              </div>
              <div className={Profile.textfooter}>
                <div className={Profile.text}>github</div>
                {/* <div className={Profile.textheader}>호</div> */}
              </div>
            </div>
          </div>
          <div className={Profile.CDbox3}></div>
        </button>
        {/* 네번째  */}
        <button className={Profile.buttonbox}>
          <div className={Profile.profilebox4}>
            <div className={Profile.profileboxbox}>
              <div>
                <div className={Profile.textheader}>
                  <div>정보보호학과</div>
                  <div>학번</div>
                </div>
                <div className={Profile.textbody}>박 범 주</div>
              </div>
              <div className={Profile.textfooter}>
                <div className={Profile.text}>github</div>
                {/* <div className={Profile.textheader}>호</div> */}
              </div>
            </div>
          </div>
          <div className={Profile.CDbox4}></div>
        </button>
        {/* 다섯번째  */}
        <button className={Profile.buttonbox}>
          <div className={Profile.profilebox5}>
            <div className={Profile.profileboxbox}>
              <div>
                <div className={Profile.textheader}>
                  <div>정보보호학과</div>
                  <div>91813157</div>
                </div>
                <div className={Profile.textbody}>지 영 욱</div>
              </div>
              <div className={Profile.textfooter}>
                <div className={Profile.text}>github</div>
                {/* <div className={Profile.textheader}>?</div> */}
              </div>
            </div>
          </div>
          <div className={Profile.CDbox5}></div>
        </button>
      </div>
    </Layout>
  );
}
