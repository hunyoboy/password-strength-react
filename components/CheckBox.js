import React, { Component } from 'react'
//checkbox component
class CheckBox extends Component {
    render() {
        return (
            <label htmlFor="show-password">
                &nbsp;            
                &nbsp;
                <input 
                    id="show-password"
                    name="show-password" 
                    type="checkbox" 
                    checked={this.props.showPassword} 
                    onChange={this.props.onClick}
                    />
                  &nbsp;Show Password
            </label>
        )
    }
}

export default CheckBox
