import React, {Component} from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import {ToastContainer, toast} from "react-toastify";
import CallImg from "../assets/images/icon_phone.png";
import MessageImg from "../assets/images/icon_message.png";
import YHImg from "../assets/images/kyh.jpg";
import YGImg from "../assets/images/kyg.jpg";

class Connect extends Component {
    state = { copied: false };
    handleCopy = () => {
        this.notify();
        this.setState({copied: true});
        setTimeout(() => { this.state.copied = false}, 1000);
    }

    notify = () => {
        toast.success('계좌번호가 복사되었습니다.', {
            position: toast.POSITION.BOTTOM_CENTER,
            theme: 'colored'
        });
    }

    render() {
        return (
            <div>
                <ToastContainer hideProgressBar={true} autoClose={800} pauseOnHover={false} closeButton={false} />
                <div className='line-title'>주인공</div>
                <div className='section-card'>
                    <div className='section__profile'>
                        <img className='section__profile--img' src={YHImg}  alt='김연희'/>
                        <div className='section__profile--row'>
                            <span className='name'><span className='nickname'>신부</span>김연희</span>
                            <span className='information'>&#128222;&nbsp;&nbsp;010-6439-2034</span>
                            <CopyToClipboard onCopy={this.handleCopy} text='59062501048264'>
                                <span className='information'>&#127974;&nbsp;&nbsp;국민&nbsp;&nbsp;5906-250104-8264</span>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <span className='information separation'>&#128150;&nbsp;&nbsp;김준수, 스테이씨, (구)동방신기, JYJ, 와조스키</span>
                    <span className='information separation end'>&#128172;&nbsp;&nbsp;결혼을 하게 되었습니다. (구)카시오페아, (현)스윗... 그리고 이제 한 남자의 신부가 되려합니다. 행복한 시작을 함께 해주세요.</span>
                    <div className='section__connect__group top'>
                        <a href='tel:01064392034' className='call'><img className='icon--connect' src={CallImg} alt='통화하기' /></a>
                        <a href='sms:01064392034' className='call'><img className='icon--connect' src={MessageImg} alt='메시지 보내기'/></a>
                    </div>
                </div>
                <div className='section-card'>
                    <div className='section__profile'>
                        <img className='section__profile--img' src={YGImg}  alt='권용근'/>
                        <div className='section__profile--row'>
                            <span className='name'><span className='nickname'>신랑</span>권용근</span>
                            <span className='information'>&#128222;&nbsp;&nbsp;010-3775-7341</span>
                            <CopyToClipboard onCopy={this.handleCopy} text='05206335701014'>
                                <span className='information'>&#127974;&nbsp;&nbsp;기업&nbsp;&nbsp;052-063357-01-014</span>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <span className='information separation'>&#128150;&nbsp;&nbsp;개발, 전자제품, 키보드</span>
                    <span className='information separation end'>&#128172;&nbsp;&nbsp;평생을 함께 하고싶은 인연을 만났습니다. 백엔드와 프론트가 만나 완전한 풀스택이 되는 아름다운 시작을 함께 축복해주세요.</span>
                    <div className='section__connect__group top'>
                        <a href='tel:01037757341' className='call'><img className='icon--connect' src={CallImg} alt='통화하기' /></a>
                        <a href='sms:01037757341' className='call'><img className='icon--connect' src={MessageImg} alt='메시지 보내기'/></a>
                    </div>
                </div>
            </div>
        );
    }
};

export default Connect;
