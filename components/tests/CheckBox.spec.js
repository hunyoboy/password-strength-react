import React from 'react/lib/ReactWithAddOns'
import CheckBox from '../CheckBox'

describe("CheckBox Component", () => {    
    beforeEach(function() {
        this.TestUtils = React.addons.TestUtils      
        this.component = this.TestUtils.renderIntoDocument(<CheckBox checked={false} />)         
    });

    it("Input tag is rendered and props is false.", function() {     
      var input = this.TestUtils.scryRenderedDOMComponentsWithTag(this.component, "input");
      expect(input.length).toEqual(1);
      expect(this.component.props.checked).toEqual(false); 
    });
});