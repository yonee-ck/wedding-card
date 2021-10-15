import React, { Component } from "react";

class TopButton extends Component {
    state = {
        ScrollY: 0,
    }
    handleTopClick = () => {
        try {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            this.state.ScrollY = 0;
        } catch (err) {
            console.error(err);
        }
    }
    render() {
        return (
            <button className='btn__top active' onClick={this.handleTopClick} />
        );
    }
};

export default TopButton;
