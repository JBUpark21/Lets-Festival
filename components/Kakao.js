import { Map, MapMarker, ZoomControl, } from "react-kakao-maps-sdk"
import Styles from "../styles/Home.module.css"
import SearchBox from "./SearchBox"

export default function Kakao() {

  const searchItems = [
    "desktop",
    "notebook",
    "smart phone",
    "clock",
    "chair",
    "iPad"
  ]

  return (
    <div>
      <div className={Styles.KakaomapP}>
        <div className={Styles.Kakaomap}>
            <Map
            center={{ lat: 36.55609600270734, lng: 127.8754074403906 }}
            level={ 13 }
            style={{ width: "100%", height: "460px" }}>
              <MapMarker position={{ lat: 36.55609600270734, lng: 127.8754074403906 }}>
                <div style={{ color: "#000" }}>Center</div>
              </MapMarker>
              <ZoomControl Position="right"></ZoomControl>
          </Map>
          </div>
        
        <SearchBox searchItems={searchItems}/>
        {/* <SearchBox searchItems={["apple", "banana", "watermelon", "melon"]}/> */}
      </div>
    </div>
  )
}