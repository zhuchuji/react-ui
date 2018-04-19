import React from 'react';
import './AnchorMenu.scss';

class AnchorMenu extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="anchor-menu__menu">
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
        <h2>Headline two</h2>
        <p>content two here...</p>
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
      </React.Fragment>
    );
  }
}

export default AnchorMenu;
