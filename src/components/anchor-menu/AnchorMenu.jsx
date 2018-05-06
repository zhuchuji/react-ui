import React from "react";
import "./AnchorMenu.scss";

class AnchorMenu extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   activeIndex: 0,
    // };
    this.changeActiveIndex = this.changeActiveIndex.bind(this);
  }

  changeActiveIndex(args) {
    console.log(args);
  }

  render() {
    return (
      <React.Fragment>
        <ul className="anchor-menu__menu" onClick={this.changeActiveIndex}>
          <li className="anchor-menu__menu-item">menu one</li>
          <li className="anchor-menu__menu-item">menu two</li>
          <li className="anchor-menu__menu-item">menu three</li>
        </ul>
        <h2>Headline one</h2>
        <p>content one here...</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Headline two</h2>
        <p>content two here...</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Headline three</h2>
        <p>content three here...</p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default AnchorMenu;
