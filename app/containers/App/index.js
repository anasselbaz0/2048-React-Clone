import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyle from '../../global-styles';
import HomePage from '../HomePage/HomePage';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  application: {
    backgroundColor: '#F2F2F2',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
};

export class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.application}>
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
        <GlobalStyle/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
