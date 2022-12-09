import React from 'react';
import { useRouter } from 'next/router';
import {
  Map,
  MapMarker,
  ZoomControl,
  MapTypeControl,
  CustomOverlayMap,
} from 'react-kakao-Maps-sdk';
import { useState, useEffect } from 'react';
import data from '../utils/data';

export default function searchMap() {
  const [SetInfo, Info] = useState();
  const [SetIsOpen, IsOpen] = useState(false);
  const [SetMarkers, Markers] = useState([]);
  const [SetMap, Map] = useState();

  useEffect(() => {
    if (!Map) return;
    const ps = new kakao.Maps.services.Places();

    ps.keywordSearch(festival.restaurant, (data, status, _pagination) => {
      if (status === kakao.Maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.Maps.LatLngBounds();
        let Markers = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          Markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.Maps.LatLng(data[i].y, data[i].x));
        }
        SetMarkers(Markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        Map.setBounds(bounds);
      }
    });
  }, [Map]);

  const { query } = useRouter();
  const { slug } = query;
  const festival = data.festivals.find((x) => x.slug === slug);

  if (!festival) {
    return <div title="Festival Not Found">Festival Not Found</div>;
  }

  return (
    <div>
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: '100%',
          height: '400px',
        }}
        level={2}
        onCreate={SetMap}
      >
        {Markers.Map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            clickable={true}
            onMouseOver={() => {
              SetIsOpen(true), SetInfo(marker);
            }}
            onMouseOut={() => {
              SetIsOpen(false), SetInfo(marker);
            }}
          >
            {info && info.content === marker.content && IsOpen && (
              // <div style={{ color: "#000" }}>{marker.content}</div>
              <div
                style={{ color: '#000' }}
                className="box-content h-10 w-60  text-center text-lg items-center"
              >
                {marker.content}
              </div>
            )}
          </MapMarker>
        ))}
        <MapTypeControl></MapTypeControl>
        <ZoomControl Position="left"></ZoomControl>
      </Map>
    </div>
  );
}
