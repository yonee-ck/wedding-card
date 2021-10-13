import React, {Component} from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Account extends Component {
    state = { copied: false };
    handleCopy = () => {
        this.setState({copied: true});
        setTimeout(() => { this.state.copied = false}, 1000);
    }

    render() {
        return (
            <div className='section section-account'>
                <div>
                    <span>신랑측 마음</span>
                    <CopyToClipboard text='0000000'>
                        <div>신한 00000</div>
                    </CopyToClipboard>
                    <span>신부측 마음</span>
                    <CopyToClipboard onCopy={this.handleCopy} text='59062501048264'>
                        <div>국민 59062501048264</div>
                    </CopyToClipboard>
                    <div>
                        { this.state.copied ? <span>계좌번호가 복사되었습니다.</span> : null}
                    </div>
                </div>
            </div>
        );
    }
};

export default Account;
