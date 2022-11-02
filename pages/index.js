import Layout from '../components/Layout';
import { Map, MapMarker } from "react-kakao-maps-sdk"

export default function Home() {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
      <Map
          center={{ lat: 37.566, lng: 126.9786567 }}
          level={120}
          style={{ width: "100%", height: "360px" }} >
        </Map>
      </div>
    </Layout>  
  )
}
