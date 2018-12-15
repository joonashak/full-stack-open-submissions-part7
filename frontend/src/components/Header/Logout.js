import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { unsetToken } from '../../reducers/userReducer';
import NavLink from './NavLink';

const mapStateToProps = state => ({ token: state.user.token });
const mapDispatchToProps = { unsetToken };

const LoginLogout = ({
  token,
  history,
  unsetToken,
  onClick,
}) => {
  if (!token || token === 'null') {
    return (
      <NavLink to="/login" onClick={onClick}>
        Log In
      </NavLink>
    );
  }

  const logout = () => {
    onClick();
    unsetToken();
    history.push('/');
  };

  return (
    <NavLink to="/" onClick={logout}>
      Log Out
    </NavLink>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(LoginLogout),
);
