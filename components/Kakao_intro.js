import { Map, MapMarker, ZoomControl } from "react-kakao-maps-sdk";
import Styles from "../styles/Home.module.css";

export default function Kakao() {
  return (
    <div>
      <div className={Styles.KakaomapB_intro}>
        <div className={Styles.Kakaomap_intro}>
          <Map
            center={{ lat: 36.55609600270734, lng: 127.8754074403906 }}
            level={13}
            style={{ width: "100%", height: "250px" }}
          >
            <MapMarker
              position={{ lat: 36.55609600270734, lng: 127.8754074403906 }}
            >
              <div style={{ color: "#000" }}>축제장소</div>
            </MapMarker>
            <ZoomControl Position="right"></ZoomControl>
          </Map>
        </div>
      </div>
    </div>
  );
}