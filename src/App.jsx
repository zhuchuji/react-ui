import React from "react";
import Menu from "components/menu";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: "" };
  }

  changeActiveIndex(key) {
    this.setState({ activeIndex: key });
  }

  render() {
    return (
      <div>
        <Menu
          activeIndex={this.state.activeIndex}
          onClick={this.changeActiveIndex.bind(this)}
          sticky={true}
          mode="anchor"
        >
          <Menu.MenuItem index="0" target="0">
            abc
          </Menu.MenuItem>
          <Menu.MenuItem index="1" target="1">
            def
          </Menu.MenuItem>
          <Menu.MenuItem index="2" target="2">
            ghi
          </Menu.MenuItem>
        </Menu>
        <h1 id="0">headline</h1>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <h1 id="1">headline</h1>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <h1 id="2">headline</h1>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
        <p>paragraph</p>
      </div>
    );
  }
}

export default App;
