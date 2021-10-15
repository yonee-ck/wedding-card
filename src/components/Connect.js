import React, {Component} from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import CallImg from "../assets/images/icon_phone.png";
import MessageImg from "../assets/images/icon_message.png";
import YHImg from "../assets/images/yh.png";
import YGImg from "../assets/images/yg.png";
import CHSImg from "../assets/images/chs.jpg";
import PHImg from "../assets/images/ph.jpg";
import DRImg from "../assets/images/dore.jpg";
import OZImg from "../assets/images/ozo.png";

class Connect extends Component {
    state = { copied: false };
    handleCopy = () => {
        this.setState({copied: true});
        setTimeout(() => { this.state.copied = false}, 1000);
    }

    render() {
        return (
            <div>
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
                            <span className='information'>&#128172;&nbsp;&nbsp;와주셔서 감사합니다~!!</span>
                        </div>
                    </div>
                    <div className='section__connect__group top'>
                        <a href='tel:01064392034' className='call'><img className='icon--connect' src={CallImg} alt='통화하기' /></a>
                        <a href='sms:01064392034' className='call'><img className='icon--connect' src={MessageImg} alt='메시지 보내기'/></a>
                    </div>
                </div>
                <div className='section-card'>
                    <div className='section__profile'>
                        <img className='section__profile--img' src={YGImg}  alt='권용'/>
                        <div className='section__profile--row'>
                            <span className='name'><span className='nickname'>신랑</span>권용근</span>
                            <span className='information'>&#128222;&nbsp;&nbsp;010-3775-7341</span>
                            <CopyToClipboard onCopy={this.handleCopy} text='59062501048264'>
                                <span className='information'>&#127974;&nbsp;&nbsp;신한&nbsp;&nbsp;5906-250104-8264</span>
                            </CopyToClipboard>
                            <span className='information'>&#128172;&nbsp;&nbsp;와주셔서 감사합니다~!!</span>
                        </div>
                    </div>
                    <div className='section__connect__group top'>
                        <a href='tel:01037757341' className='call'><img className='icon--connect' src={CallImg} alt='통화하기' /></a>
                        <a href='sms:01037757341' className='call'><img className='icon--connect' src={MessageImg} alt='메시지 보내기'/></a>
                    </div>
                </div>
                <div className='line-title'>혼주들</div>
                <div className='section-card'>
                    <div className='section__profile'>
                        <img className='section__profile--img' src={YGImg}  alt='권순'/>
                        <div className='section__profile--row'>
                            <span className='name'><span className='nickname'>신랑측 혼주</span>권순갑</span>
                            <span className='information'>&#128222;&nbsp;&nbsp;010-3775-7341</span>
                            <CopyToClipboard onCopy={this.handleCopy} text='59062501048264'>
                                <span className='information'>&#127974;&nbsp;&nbsp;신한&nbsp;&nbsp;5906-250104-8264</span>
                            </CopyToClipboard>
                            <span className='information'>&#128172;&nbsp;&nbsp;와주셔서 감사합니다~!!</span>
                        </div>
                    </div>
                    <div className='section__connect__group top'>
                        <a href='tel:01037757341' className='call'><img className='icon--connect' src={CallImg} alt='통화하기' /></a>
                        <a href='sms:01037757341' className='call'><img className='icon--connect' src={MessageImg} alt='메시지 보내기'/></a>
                    </div>
                </div>
                <div className='section-card'>
                    <div className='section__profile'>
                        <img className='section__profile--img' src={YGImg}  alt='정현'/>
                        <div className='section__profile--row'>
                            <span className='name'><span className='nickname'>신랑측 혼주</span>정현숙</span>
                            <span className='information'>&#128222;&nbsp;&nbsp;010-3775-7341</span>
                            <CopyToClipboard onCopy={this.handleCopy} text='59062501048264'>
                                <span className='information'>&#127974;&nbsp;&nbsp;신한&nbsp;&nbsp;5906-250104-8264</span>
                            </CopyToClipboard>
                            <span className='information'>&#128172;&nbsp;&nbsp;와주셔서 감사합니다~!!</span>
                        </div>
                    </div>
                    <div className='section__connect__group top'>
                        <a href='tel:01037757341' className='call'><img className='icon--connect' src={CallImg} alt='통화하기' /></a>
                        <a href='sms:01037757341' className='call'><img className='icon--connect' src={MessageImg} alt='메시지 보내기'/></a>
                    </div>
                </div>
                <div className='section-card'>
                    <div className='section__profile'>
                        <img className='section__profile--img' src={PHImg}  alt='조필호' />
                        <div className='section__profile--row'>
                            <span className='name'><span className='nickname'>신부측 혼주</span>조필호</span>
                            <span className='information'>&#128222;&nbsp;&nbsp;010-9064-8989</span>
                            <span className='information'>&#128172;&nbsp;&nbsp;선남선녀 한쌍의 경이로운 탄생의 현장으로 소중한분들을 초대합니다~</span>
                        </div>
                    </div>
                    <div className='section__connect__group top'>
                        <a href='tel:01090648989' className='call'><img className='icon--connect' src={CallImg} alt='통화하기' /></a>
                        <a href='sms:01090648989' className='call'><img className='icon--connect' src={MessageImg} alt='메시지 보내기'/></a>
                    </div>
                </div>
                <div className='section-card'>
                    <div className='section__profile'>
                        <img className='section__profile--img' src={CHSImg}  alt='최현숙' />
                        <div className='section__profile--row'>
                            <span className='name'><span className='nickname'>신부측 혼주</span>최현숙</span>
                            <span className='information'>&#128222;&nbsp;&nbsp;010-3782-0519</span>
                            <CopyToClipboard onCopy={this.handleCopy} text='59062501048264'>
                                <span className='information'>&#127974;&nbsp;&nbsp;국민&nbsp;&nbsp;073001-04-234523</span>
                            </CopyToClipboard>
                            <span className='information'>&#128172;&nbsp;&nbsp;사랑하는 저희 딸이 이쁜 새가정을 꾸미려고 합니다.<br/>바쁘시겠지만 함께해주시면 감사하겠습니다.</span>
                        </div>
                    </div>
                    <div className='section__connect__group top'>
                        <a href='tel:01037820519' className='call'><img className='icon--connect' src={CallImg} alt='통화하기' /></a>
                        <a href='sms:01037820519' className='call'><img className='icon--connect' src={MessageImg} alt='메시지 보내기'/></a>
                    </div>
                </div>
                <div className='line-title'>반려동물</div>
                <div className='section-card'>
                    <div className='section__profile'>
                        <img className='section__profile--img' src={OZImg}  alt='오'/>
                        <div className='section__profile--row'>
                            <span className='name'><span className='nickname'>고양이</span>오조</span>
                            <span className='information'>&#128172;&nbsp;&nbsp;누나, 형아 결혼식에 초대한다옹~</span>
                        </div>
                    </div>
                </div>
                <div className='section-card'>
                    <div className='section__profile'>
                        <img className='section__profile--img' src={DRImg}  alt='도레' />
                        <div className='section__profile--row'>
                            <span className='name'><span className='nickname'>강아지</span>도레</span>
                            <span className='information'>&#128172;&nbsp;&nbsp;아르르르.. 사회성이 떨어지지만 오늘만은 참아주겠어!</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Connect;
