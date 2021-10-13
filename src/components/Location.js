/*global kakao*/
import React, { useEffect } from 'react'

const Location=()=> {
    useEffect(()=>{
        var container = document.getElementById('map');
        var options = {
            center: new kakao.maps.LatLng(37.559136279967994, 126.98445445373625),
            level: 3
        };
        var map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(37.559136279967994, 126.98445445373625);
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });
        marker.setMap(map);
    }, [])

    return (
        <div className='section-location'>
            <div className='section-location__map' id="map"></div>
            <div className='section-location__info'>
                <div className='section-location__set'>
                    <div className='section-location__tit'>
                        라루체 웨딩홀
                    </div>
                    <a className='call' href='tel:027668200'>통화</a>
                    <div className='section-location__description'>
                        서울 중구 퇴계로 18길 46(서울 중구 남산동1가 13-6)
                    </div>
                </div>
                <div className='section-location__set'>
                    <div className='section-location__tit'>
                        지하철
                    </div>
                    <div className='section-location__description'>
                        4호선 명동역 3번 출구(퍼시픽 호텔 우측길로 60m)
                    </div>
                </div>
                <div className='section-location__set'>
                    <div className='section-location__tit'>
                        버스
                    </div>
                    <div className='section-location__description'>
                        104, 263, 507, 604, 421, 7011 (명동입구역 하차)
                    </div>
                </div>
                <div className='section-location__set'>
                    <div className='section-location__tit'>
                        주차
                    </div>
                    <div className='section-location__description'>
                        라루체 전용주차장 보유<br/>
                        주차장이 혼잡하오니 대중교통을 이용해 주시기 바랍니다.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Location;
