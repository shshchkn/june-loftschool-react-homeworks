import React, { PureComponent } from 'react';

class Child extends PureComponent {
  render() {
    console.log(this.props);
    return (
      <div>
        <pre>child: {this.props.condition && this.props.children}</pre>
      </div>
    );
  }
}

export default Child;
