import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";
import "./Menu.scss";

class Menu extends React.Component {
  static MenuItem = MenuItem;

  static propTypes = {
    activeIndex: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.oneOf([MenuItem])
        })
      ),
      PropTypes.shape({
        type: PropTypes.oneOf([MenuItem])
      })
    ]),
    mode: PropTypes.oneOf(["link", "anchor"]),
    onClick: PropTypes.func,
    sticky: PropTypes.bool
  };
  static defaultProps = {
    activeIndex: "",
    mode: "link",
    onClick: () => {},
    sticky: false
  };

  constructor(props) {
    super(props);
    this.targetIds = [];
    this.targetOffsets = [];
    this.isAnimateScrolling = false;
    this.startTimestamp = null;
    this.changeActiveIndexOnScroll = this.changeActiveIndexOnScroll.bind(this);
    this.animateScrolling = this.animateScrolling.bind(this);
  }

  componentDidMount() {
    this.initScroll();
    document.addEventListener("scroll", this.changeActiveIndexOnScroll);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.changeActiveIndexOnScroll);
  }

  throttle(callback) {}

  changeActiveIndex(index) {
    this.scrollYToTarget(index, 1200);
    this.props.onClick(index);
  }

  initScroll() {
    this.targetIds = React.Children.map(this.props.children, child => {
      return child.props.target;
    });
    this.targetOffsets = this.targetIds.map(id => {
      const element = document.getElementById(id);
      // support IE 9+
      const rect = element.getBoundingClientRect();
      // support IE 8+
      const windowScrollY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;
      return windowScrollY + Math.round(rect.top) - 30;
    });
  }

  scrollYToTarget(targetId, duration) {
    const targetOffset = this.targetOffsets[this.targetIds.indexOf(targetId)];
    const windowScrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
    this.isAnimateScrolling = true;
    this.startOffset = windowScrollY;
    this.targetOffset = targetOffset;
    this.duration = duration;
    if (targetOffset !== windowScrollY) {
      if (targetOffset > windowScrollY) {
        this.isDown = true;
      } else {
        this.isDown = false;
      }
      // Support IE 10+
      window.requestAnimationFrame(this.animateScrolling);
    }
  }

  animateScrolling(timestamp) {
    if (this.startTimestamp == null) {
      this.startTimestamp = timestamp;
    }
    const elipsedTime = timestamp - this.startTimestamp;
    const percent = elipsedTime / this.duration;

    if (percent >= 1) {
      window.scrollTo(0, this.targetOffset);
      if (this.animationFrameId != null) {
        window.cancelAnimationFrame(this.animationFrameId);
      }
      this.isAnimateScrolling = false;
      this.startTimestamp = null;
    } else {
      window.scrollTo(
        0,
        this.startOffset + (this.targetOffset - this.startOffset) * percent
      );
      this.animationFrameId = window.requestAnimationFrame(
        this.animateScrolling
      );
    }
  }

  changeActiveIndexOnScroll() {
    if (!this.isAnimateScrolling) {
      const windowScrollY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;
      let target = null;
      for (let i = this.targetOffsets.length - 1; i >= 0; i--) {
        if (windowScrollY >= this.targetOffsets[i]) {
          target = this.targetIds[i];
          break;
        }
      }
      if (target != null && target !== this.props.activeIndex) {
        this.props.onClick(target);
      }
    }
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      let isActive = this.props.activeIndex === child.props.index;
      return React.cloneElement(child, {
        isActive: isActive,
        onClick: this.changeActiveIndex.bind(this, child.props.index)
      });
    });
    const className = "ui-menu" + (this.props.sticky ? " ui-menu--sticky" : "");
    return <ul className={className}>{children}</ul>;
  }
}

export default Menu;
