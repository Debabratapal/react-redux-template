import React, { Component } from 'react';
import { connect } from 'react-redux';

import Snack from './Snack';

class SnackBar extends Component {
  state = {
    snack: {},
    snackOpen: false
  };

  componentWillReceiveProps(nextProps) {
    let { snack } = nextProps;
    if (snack) {
      if (this.state.snackOpen) {
        this.setState({ snackOpen: false });
        setTimeout(() => {
          this.setState({ snackOpen: true, snack });
        }, 500);
        setTimeout(() => {
          if (snack === this.state.snack) {
            this.setState({ snackOpen: false });
          }
        }, 2500);
      } else {
        this.setState({ snackOpen: true, snack });
        setTimeout(() => {
          if (snack === this.state.snack) {
            this.setState({ snackOpen: false });
          }
        }, 2000);
      }
    }
  }

  render() {
    return (
      <Snack message={this.state.snack.message} open={this.state.snackOpen} />
    );
  }
}

const mapStateToProps = state => ({
  snack: state.util.snack
});

export default connect(mapStateToProps)(SnackBar);
