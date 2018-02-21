import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from '../components/TextField';
import Paper from '../components/Paper';
import Grid from 'material-ui/Grid';
import md5 from 'md5';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { classes, listPosts, addPost } = this.props;
        return (
            <div style={{flexGrow: 1}}>
                <Grid container spacing={24} style={{justifyContent: 'center'}}>
                    <Grid item xs={7}>
                        <TextField className={classes.paper} addPost={addPost} />
                    </Grid>
                    <Grid item xs={7}>
                        {listPosts.map((elem, i) => <Paper key={md5(elem + i)} className={classes.paper} text={elem}/>)}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
