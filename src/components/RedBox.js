import React from 'react';

export default class RedBox extends React.Component {

    componentWillMount () {
        this.style = {
            background: "red"
        }
    }

    render () {
        return (
            <div style={this.style}>
                {this.props.children}
            </div>
        )
    }

}