import React, { Component } from 'react'
//rules list component
class RulesList extends Component {
    render() {
        return (
            <ul>
                <li className={this.props.hasNumber}>
                    At least one number (0-9)
                </li>
                <li className={this.props.hasLetter}>
                    At least one letter (a-z)
                </li>
                <li className={this.props.isValidLength}>
                    At least 6 characters
                </li>
                <li className={this.props.noSpecialChar}>
                    No spaces, forward slashes (/) or double quote marks (")
                </li>     
            </ul>
        )
    }
}

export default RulesList
