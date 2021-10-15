import React, { Component } from "react";

class CopyUrl extends Component {
    state = {
        copyStatus: false,
    }
    handleCopyClick = () => {
        try {
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
            <button className='btn__copy' onClick={this.handleCopyClick} />
        );
    }
};

export default CopyUrl;
