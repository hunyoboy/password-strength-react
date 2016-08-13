
import React, { Component } from 'react'
import Password from './Password'
import CheckBox from './CheckBox'
import RulesList from './RulesList'
import RulesMeter from './RulesMeter'


//the main password widget
class PasswordStrength extends Component {    
    constructor() {
        super();
        this.state = {                        
                        type: 'password',
                        checked: false,
                        meterTitle: 'Invalid',
                        meterClass: 'danger',
                        meterWidth: 25,
                        rules: {
                            isValidLength: false,
                            hasNumber: false,
                            hasLetter: false,
                            noSpecialChar: true
                        }
                     };
    }

    onCheckBoxClick() { 
        var isChecked = !this.state.checked;     
        this.setState({
            checked: isChecked,
            type: (isChecked ? "text" : "password")
        });
    }

    onPasswordChange(e) {
        this.setState({          
            rules: {
                hasNumber: e.target.value.match(/\d/) ? true : false,
                hasLetter: e.target.value.match(/[A-z]/) ? true : false,
                isValidLength: e.target.value.match(/^.{6,}$/) ? true : false,
                noSpecialChar: !e.target.value.match(/[ \/"]/) ? true : false
            }
        },function(){
            this.setMeterAttributes(this.state.rules);
        });         
    }

    setMeterAttributes(rules){
       var meterWidth = this.getMeterWidth(rules);
       this.setState({
           meterWidth: meterWidth,
           meterTitle: (100 === meterWidth ? "Valid Password" : "Invalid Password"),
           meterClass: (100 > meterWidth ? "danger" : "")           
       });  
    }


    getMeterWidth (rules) {
        var property_count = 0, valid_property_count = 0, property;
        for (property in rules) {
            if (rules.hasOwnProperty(property)) {
                property_count = property_count + 1;
                if (rules[property]) {
                    valid_property_count = valid_property_count + 1;
                }
            }
        }
        return (valid_property_count / property_count) * 100;  
    }

    getSingleRuleStatus(status) {       
       if(status){
           return "valid";
       }
       return "invalid";
    }

    render() {      
        return (                            
            <div className="password-strength-widget">
                <Password type={this.state.type} onChange={this.onPasswordChange.bind(this)}/>
                <CheckBox showPassword={this.state.checked} onClick={this.onCheckBoxClick.bind(this)}/>
                <br/><br/>
                <RulesMeter title={this.state.meterTitle} className={this.state.meterClass} meterWidth={this.state.meterWidth}/>        
                <RulesList 
                    isValidLength={this.getSingleRuleStatus(this.state.rules.isValidLength)} 
                    hasNumber={this.getSingleRuleStatus(this.state.rules.hasNumber)}
                    hasLetter={this.getSingleRuleStatus(this.state.rules.hasLetter)}
                    noSpecialChar={this.getSingleRuleStatus(this.state.rules.noSpecialChar)}
                    />
            </div>           
        )
    }
}

export default PasswordStrength

