import React, { Component } from 'react'
//rules meter component
class RulesMeter extends Component {
    render() {
        return (
            <div>
                <span>{this.props.title}</span>
                <div className="meter-wrapper">
                   <div className={this.props.className} style={{width: this.props.meterWidth + '%'}}></div>
                </div>   
            </div>
        )
    }
}

export default RulesMeter
