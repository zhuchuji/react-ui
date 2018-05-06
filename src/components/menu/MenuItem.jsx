import React from "react";
import PropTypes from "prop-types";
import "./MenuItem.scss";

class MenuItem extends React.Component {
  static propTypes = {
    index: PropTypes.string.isRequired,
    isActive: PropTypes.bool
  };
  static defaultProps = {
    isActive: false
  };

  constructor(props) {
    super(props);
  }

  render() {
    let classNames =
      "ui-menu-item" + (this.props.isActive ? " ui-menu-item--active" : "");
    return (
      <li className={classNames} onClick={this.props.onClick}>
        {this.props.children}
      </li>
    );
  }
}

export default MenuItem;
