import React, { Component } from "react";
import {ToastContainer, toast} from "react-toastify";

class CopyUrl extends Component {
    state = {
        copyStatus: false,
    }
    notify = () => {
        toast.success('URL이 복사되었습니다.', {
            position: toast.POSITION.BOTTOM_CENTER,
            theme: 'colored'
        });
    }

    handleCopyClick = () => {
        try {
            this.notify();
            this.state.copyStatus = true;
            this.props.onCreate(this.state);
            const textField = document.createElement('textarea');
            textField.innerText = document.location.href
            document.body.appendChild(textField);
            textField.select();
            document.execCommand('copy');
            textField.remove();
            setTimeout(() => { this.state.copyStatus = false}, 1000);
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div>
                <button className='btn__copy' onClick={this.handleCopyClick} />
                <ToastContainer hideProgressBar={true} autoClose={800} pauseOnHover={false} closeButton={false} />
            </div>
        );
    }
};

export default CopyUrl;
