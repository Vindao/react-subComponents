import React, { Component } from "react";

import {
  DropDown,
  DropDownButton,
  DropDownMenu,
  DropDownItem
} from "../Dropdown";

class TestComponent extends Component {
  render() {
    return (
      <div>
        <DropDown>
          <DropDownButton>Drop</DropDownButton>
          <DropDownMenu>
            <DropDownItem>Hallo</DropDownItem>
            <DropDownItem>Hallo</DropDownItem>
          </DropDownMenu>
        </DropDown>
      </div>
    );
  }
}

export default TestComponent;
