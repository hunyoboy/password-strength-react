import React from 'react/lib/ReactWithAddOns'
import PasswordStrength from '../PasswordStrength'

describe("PasswordStrength Component", () => {   
    
    beforeEach(function() {
        this.TestUtils = React.addons.TestUtils      
        this.component = this.TestUtils.renderIntoDocument(<PasswordStrength/>)    
    });

    it("Renders a div with class danger.", function() { 
      var box = this.TestUtils.scryRenderedDOMComponentsWithClass(this.component, "danger");      
      expect(box.length).toEqual(1);
    });
});