import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    color: 'white',
    margin: theme.spacing.unit,
  },
});
class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: ''};
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent (event){
    event.preventDefault();
    this.props.filterList(event.target.value);
    this.setState({
      filter: event.target.value
    })
  };

  render() {
    const { classes } = this.props;

    return (
    <div className={classes.container}>
      <Input
        value={this.state.filter}
        placeholder="Filter"
        className={classes.input}
        onChange={event => this.handleEvent(event)}
        inputProps={{
          'aria-label': 'Filter',
        }}
      />
    </div>
  )};
}

Inputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Inputs);