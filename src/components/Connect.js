import React, {Component} from "react";
import { CopyToClipboard } from "react-copy-to-clipboard/lib/Component";
import {ToastContainer, toast} from "react-toastify";
import CallImg from "../assets/images/icon_phone.png";
import MessageImg from "../assets/images/icon_message.png";
import CHSImg from "../assets/images/chs.png";
import PHImg from "../assets/images/ph.png";
import DRImg from "../assets/images/dore.jpg";
import OZImg from "../assets/images/ozo.jpg";
import JHSImg from "../assets/images/jhs.png";
import KSGImg from "../assets/images/ksg.jpg";

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
                <div className='line-title'>혼주</div>
                <div className='section-card'>
                    <div className='section__profile'>
                        <img className='section__profile--img' src={KSGImg}  alt='권순갑'/>
                        <div className='section__profile--row'>
                            <span className='name'><span className='nickname'>신랑측 혼주</span>권순갑</span>
                            <span className='information'>&#128222;&nbsp;&nbsp;010-8733-1857</span>
                            <CopyToClipboard onCopy={this.handleCopy} text='1002951593148'>
                                <span className='information'>&#127974;&nbsp;&nbsp;우리&nbsp;&nbsp;100-29515-93-148</span>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <span className='information separation'>&#128172;&nbsp;&nbsp;축하와 응원으로 축복해주세요~</span>
                    <div className='section__connect__group top'>
                        <a href='tel:01087331857' className='call'><img className='icon--connect' src={CallImg} alt='통화하기' /></a>
                        <a href='sms:01087331857' className='call'><img className='icon--connect' src={MessageImg} alt='메시지 보내기'/></a>
                    </div>
                </div>
                <div className='section-card'>
                    <div className='section__profile'>
                        <img className='section__profile--img' src={JHSImg}  alt='정현숙'/>
                        <div className='section__profile--row'>
                            <span className='name'><span className='nickname'>신랑측 혼주</span>정현숙</span>
                            <span className='information'>&#128222;&nbsp;&nbsp;010-3804-1857</span>
                            <CopyToClipboard onCopy={this.handleCopy} text='06928256812001'>
                                <span className='information'>&#127974;&nbsp;&nbsp;우리&nbsp;&nbsp;069-282568-12-001</span>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <span className='information separation'>&#128172;&nbsp;&nbsp;친지분들과 여러분들 모시고 화촉을 밝히게 되었음을 알리오니 두사람 축복해주세요.</span>
                    <div className='section__connect__group top'>
                        <a href='tel:01038041857' className='call'><img className='icon--connect' src={CallImg} alt='통화하기' /></a>
                        <a href='sms:01038041857' className='call'><img className='icon--connect' src={MessageImg} alt='메시지 보내기'/></a>
                    </div>
                </div>
                <div className='section-card'>
                    <div className='section__profile'>
                        <img className='section__profile--img' src={PHImg}  alt='조필호' />
                        <div className='section__profile--row'>
                            <span className='name'><span className='nickname'>신부측 혼주</span>조필호</span>
                            <span className='information'>&#128222;&nbsp;&nbsp;010-9064-8989</span>
                        </div>
                    </div>
                    <span className='information separation'>&#128172;&nbsp;&nbsp;선남선녀 한쌍의 경이로운 탄생의 현장으로 소중한분들을 초대합니다~</span>
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
                            <CopyToClipboard onCopy={this.handleCopy} text='07300104234523'>
                                <span className='information'>&#127974;&nbsp;&nbsp;국민&nbsp;&nbsp;073001-04-234523</span>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <span className='information separation'>&#128172;&nbsp;&nbsp;사랑하는 저희 딸이 이쁜 새가정을 꾸미려고 합니다. 바쁘시겠지만 함께해주시면 감사하겠습니다.</span>
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
                            <span className='information'>&#128571;&nbsp;&nbsp;참치회, 캣글라스, 연희누나</span>
                            <span className='information'>&#128574;&nbsp;&nbsp;낯선 생명체</span>
                        </div>
                    </div>
                    <span className='information separation'>&#128172;&nbsp;&nbsp;누나, 형아의 결혼식에 초대한다옹~</span>
                </div>
                <div className='section-card'>
                    <div className='section__profile'>
                        <img className='section__profile--img' src={DRImg}  alt='도레' />
                        <div className='section__profile--row'>
                            <span className='name'><span className='nickname'>강아지</span>도레</span>
                            <span className='information'>&#128571;&nbsp;&nbsp;장난감, 간식, 뒹굴기</span>
                            <span className='information'>&#128574;&nbsp;&nbsp;다른 강아지</span>
                        </div>
                    </div>
                    <span className='information separation'>&#128172;&nbsp;&nbsp;아르르르.. 사회성이 떨어지지만 오늘만은 참아주겠어!</span>
                </div>
            </div>
        );
    }
};

export default Connect;
