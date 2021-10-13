import React from "react";
import CallImg from "../assets/images/icon_phone.png";
import MessageImg from "../assets/images/icon_message.png";

function Connect(props) {
    return (
        <div className='section-top'>
            <div className='section-group section-connect__set'>
                <div className='section-connect'>
                    <div className='section-connect__group last'>
                        <a href='tel:01064392034'><img className='icon--connect' src={CallImg} alt='통화하기' /></a>
                        <a href='sms:01064392034'><img className='icon--connect' src={MessageImg} alt='메시지 보내기'/></a>
                    </div>
                    <div className='section-connect__group one'>신부에게 연락하기</div>
                </div>
            </div>
            <div className='section-group section-connect__set'>
                <div className='section-connect'>
                    <div className='section-connect__group last'>
                        <a href='tel:01037757341'><img className='icon--connect' src={CallImg} alt='통화하기' /></a>
                        <a href='sms:01037757341'><img className='icon--connect' src={MessageImg} alt='메시지 보내기'/></a>
                    </div>
                    <div className='section-connect__group one'>신랑에게 연락하기</div>
                </div>
            </div>
            <div className='section-group section-connect__set'>
                <div className='section-connect'>
                    <div className='section-connect__group last'>
                        <a href='tel:01090648989'><img className='icon--connect' src={CallImg} alt='통화하기' /></a>
                        <a href='sms:01090648989'><img className='icon--connect' src={MessageImg} alt='메시지 보내기'/></a>
                    </div>
                    <div className='section-connect__group  one'>신부 혼주, 조필호에게 연락하기</div>
                </div>
            </div>
            <div className='section-group section-connect__set'>
                <div className='section-connect'>
                    <div className='section-connect__group last'>
                        <a href='tel:01037820519'><img className='icon--connect' src={CallImg} alt='통화하기' /></a>
                        <a href='sms:01037820519'><img className='icon--connect' src={MessageImg} alt='메시지 보내기'/></a>
                    </div>
                    <div className='section-connect__group one'>신부 혼주, 최현숙에게 연락하기</div>
                </div>
            </div>
            <div className='section-group section-connect__set'>
                <div className='section-connect'>
                    <div className='section-connect__group last'>
                        <a href='tel:01087331857'><img className='icon--connect' src={CallImg} alt='통화하기' /></a>
                        <a href='sms:01087331857'><img className='icon--connect' src={MessageImg} alt='메시지 보내기'/></a>
                    </div>
                    <div className='section-connect__group one'>신랑 혼주, 권순갑에게 연락하기</div>
                </div>
            </div>
            <div className='section-group section-connect__set'>
                <div className='section-connect'>
                    <div className='section-connect__group last'>
                        <a href='tel:01038041857'><img className='icon--connect' src={CallImg} alt='통화하기' /></a>
                        <a href='sms:01038041857'><img className='icon--connect' src={MessageImg} alt='메시지 보내기'/></a>
                    </div>
                    <div className='section-connect__group one'>신랑 혼주, 정현숙에게 연락하기</div>
                </div>
            </div>
        </div>
    );
};

export default Connect;
