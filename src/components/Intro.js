import React from "react";

function Intro(props) {
    return (
        <div className='section-group'>
            <div className='section-group__set'>
                <img className='section-group--img' src='https://avatars.githubusercontent.com/u/17121431?v=4' />
                <div className='section-group--row'>
                    <span className='name'>YongGeun Kwon</span>
                    <span className='nickname'>kingbbode</span>
                </div>
            </div>
            <span className='title'>Backend Developer</span>
            <span className='description'>이메일</span>
            <span className='description'>깃주소</span>
            <span className='description last'>
                <p>&#127775;</p></span>
            <div className='section-group__set'>
                <img className='section-group--img' src='https://avatars.githubusercontent.com/u/23132747?v=4' />
                <div className='section-group--row'>
                    <span className='name'>YounHee Kim</span>
                    <span className='nickname'>yonee</span>
                </div>
            </div>
            <span className='title'>Frontend Developer</span>
            <span className='description'>이메일</span>
            <span className='description'>깃주소</span>
            <span className='description'>등등등</span>
        </div>
    );
};

export default Intro;
