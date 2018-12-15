import React from 'react';
import userService from '../../services/userService';
import AllUsers from './AllUsers';
import OneUser from './OneUser';


export default class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount = async () => {
    const users = await userService.findAll();
    this.setState({ users });
  };

  render = () => {
    const { users } = this.state;
    const { id } = this.props.match.params;

    // Lazy-loading
    if (users.length === 0) return null;

    return id
      ? <OneUser user={users.filter(u => u.id === id)[0]} />
      : <AllUsers users={users} />;
  };
}
