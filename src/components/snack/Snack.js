import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Snackbar } from '@material-ui/core';

const styles = theme => ({
  snackContent: {
    backgroundColor: '#24292E'
  }
});

class Snack extends Component {
  render() {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={this.props.open}
        snackbarcontentprops={{
          'aria-describedby': 'message-id',
          className: this.props.classes.snackContent
        }}
        message={(<span id="message-id">{this.props.message}</span>)}
      />
    );
  }
}

export default withStyles(styles)(Snack);
