import React from 'react';

class ButtonGame extends React.Component {

    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.props.handler(this.props.value);
    }

    render() {
        return (
            <button className="btn btn-primary" onClick={this.clickHandler}>
                {this.props.value}
            </button>
        );
    }

}

export default ButtonGame;
