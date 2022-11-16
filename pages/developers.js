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
                  <div>Example</div>
                  <div>sex</div>
                </div>
                <div className={Profile.textbody}>엄 준 식</div>
              </div>
              <div className={Profile.textfooter}>
                <div className={Profile.text}>야</div>
                <div className={Profile.textheader}>호</div>
              </div>
            </div>
          </div>
          <div className={Profile.CDbox1}></div>
        </button>
        {/* 두번째  */}
        <div className={Profile.emptybox}></div>
        <button className={Profile.buttonbox}>
          <div className={Profile.profilebox2}>
            <div className={Profile.profileboxbox}>
              <div>
                <div className={Profile.textheader}>
                  <div>Example</div>
                  <div>sex</div>
                </div>
                <div className={Profile.textbody}>엄 준 식</div>
              </div>
              <div className={Profile.textfooter}>
                <div className={Profile.text}>야</div>
                <div className={Profile.textheader}>호</div>
              </div>
            </div>
          </div>
          <div className={Profile.CDbox1}></div>
        </button>
      </div>
    </Layout>
  );
}
