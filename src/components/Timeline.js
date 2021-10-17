import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Timeline(props) {

    return (
        <VerticalTimeline className='timeline-line'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fbe3e8', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #fbe3e8' }}
                date="2000"
                iconStyle={{ background: '#ea728e', color: '#fff' }}
                icon={<FavoriteIcon style={{ fill: '#fff' }} />}
            >
                <h className="vertical-timeline-element-title">첫만남</h>
                <p className="vertical-timeline-element-description">
                    초등학교 같은 반 친구
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fbe3e8', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #fbe3e8' }}
                date="2008"
                iconStyle={{ background: '#ea728e', color: '#fbe3e8' }}
                icon={<FavoriteIcon style={{ fill: '#fff' }} />}
            >
                <h3 className="vertical-timeline-element-title">재회</h3>
                <p className="vertical-timeline-element-description">
                대학교 과 동기
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fbe3e8', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #fbe3e8' }}
                date="2012"
                iconStyle={{ background: '#ea728e', color: '#fff' }}
                icon={<FavoriteIcon style={{ fill: '#fff' }} />}
            >
                <h3 className="vertical-timeline-element-title">두번째 재회</h3>
                <p className="vertical-timeline-element-description">
                    같은 시기에 복학
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#fbe3e8', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #fbe3e8' }}
                date="2012.4.19"
                iconStyle={{ background: '#ea728e', color: '#fff' }}
                icon={<FavoriteIcon style={{ fill: '#fff' }} />}
            >
                <h3 className="vertical-timeline-element-title">오늘부터 1일</h3>
                <p className="vertical-timeline-element-description">
                    봄바람 휘날리며~ 흩날리는 벚꽃잎이~
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#fbe3e8', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #fbe3e8' }}
                date="2021.11.20"
                iconStyle={{ background: '#ea728e', color: '#fff' }}
                icon={<FavoriteIcon style={{ fill: '#fff' }} />}
            >
                <h3 className="vertical-timeline-element-title">결혼</h3>
                <p className="vertical-timeline-element-description">
                    새로운 시작. 다시 1일 ❤️
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}

export default Timeline;
