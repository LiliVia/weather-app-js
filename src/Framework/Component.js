import { Object } from "core-js";
import { checkType } from '../services/helpers';

class Component {
  constructor(props) {
    this.props = props || {};
    this.state = {};
    this.host = null;
  }

  updateState(nextState) {
    this.state = Object.assign({}, this.state, nextState);
    this._render();
  }

  update(nextProps) {
    this.props = nextProps;
    return this._render()
  }

  _render() {
    this.host.innerHTML = '';
    const children = this.render();
    const type = checkType(children);

    if (type === 'string') {
      this.host.innerHTML = children;
    }
    else if (Array.isArray(children)) {
      this.host.append(...children);
    }
    else {
      this.host.append(children);
    }

    return this.host;
  }

  render() { }
}

export default Component;