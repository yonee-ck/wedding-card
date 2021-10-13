import React, { Component } from "react";

class CopyUrl extends Component {
    state = {
        copyComplete: false,
    }
    handleCopyClick = () => {
        try {
            this.state.copyComplete = true;
            this.props.onCreate(this.state);
            const textField = document.createElement('textarea');
            textField.innerText = document.location.href
            document.body.appendChild(textField);
            textField.select();
            document.execCommand('copy');
            textField.remove();
            setTimeout(() => { this.state.copyComplete = false}, 1000);
        } catch (err) {
            console.error(err);
        }
    }
    render() {
        return (
            // <li class="linkbtn05"><a @click="copyUrl()"><em class="hidden">url</em></a></li>
            <button className='btn__copy' onClick={this.handleCopyClick}>copy</button>
        );
    }
};

export default CopyUrl;
