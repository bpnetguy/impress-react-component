import React from 'react';

export default class Presentation extends React.Component {

    componentDidMount () {
        impress().init()
    }

    render () {
        return (
            <div style={this.props.style} id="impress">
                {this.props.children}
            </div>
        )
    }

}