import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';

function Timeline(props) {

    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                layout="1-column-left"
                contentStyle={{ background: '#fbe3e8', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #fbe3e8' }}
                date="2000"
                iconStyle={{ background: '#fbe3e8', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">초등학교</h3>
                <h4 className="vertical-timeline-element-subtitle">4학년 6반</h4>
                <p>
                    같은 반 친구 (안 친한 사이)
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                layout="1-column-left"
                contentStyle={{ background: '#fbfab8', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #fbfab8' }}
                date="2008"
                iconStyle={{ background: '#ea728e', color: '#fbe3e8' }}
            >
                <h3 className="vertical-timeline-element-title">대학교 입학</h3>
                <h4 className="vertical-timeline-element-subtitle">컴퓨터공학 신입생 OT</h4>
                <p>
                    같은 과 동기
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                layout="1-column-left"
                contentStyle={{ background: '#b4dcd9', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #b4dcd9' }}
                date="2012"
                iconStyle={{ background: '#ea728e', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">학교 복학</h3>
                <h4 className="vertical-timeline-element-subtitle">복학 시기 겹침</h4>
                <p>
                    동기들과 같이 복학하며 가까워짐
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                layout="1-column-left"
                contentStyle={{ background: '#fbe3e8', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #fbe3e8' }}
                date="2012.4.19"
                iconStyle={{ background: '#ea728e', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">오늘부터 1일</h3>
                <h4 className="vertical-timeline-element-subtitle">여의도 벚꽃 축제</h4>
                <p>
                    봄바람 휘날리며~ 흩날리는 벚꽃잎이~
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                layout="1-column-left"
                contentStyle={{ background: '#fbe3e8', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #fbe3e8' }}
                date="2021.11.20"
                iconStyle={{ background: '#ea728e', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">결혼식</h3>
                <h4 className="vertical-timeline-element-subtitle">명동 라루체 웨딩홀</h4>
                <p>
                    오늘부터 또 1일
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}

export default Timeline;
