import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import Header from './components/Header';
import Alert from './components/misc/Alert';

// CSS for react-bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList';


export default class App extends React.Component {
  componentDidMount() {
    document.title = 'Blog App';
  }

  render() {
    return (
      <div>
        <Header />
        <Alert />
        <Switch>
          <Route path="/users" component={UserList} />
          <Route path="/user/:id" component={UserList} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </div>
    );
  }
}
