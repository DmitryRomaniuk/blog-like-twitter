import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class TextFields extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event){
    event.preventDefault();
    this.props.addPost(event.target[0].value);
  };

  render() {
    const { classes } = this.props;

    return (
            <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                <TextField
                id="multiline-static"
                label="Multiline"
                multiline
                rows="4"
                defaultValue="Default Value"
                className={classes.textField}
                margin="normal"
                fullWidth
                />
                <Button color="primary" className={classes.button} type="submit">
                    Add Post
                </Button>
            </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);