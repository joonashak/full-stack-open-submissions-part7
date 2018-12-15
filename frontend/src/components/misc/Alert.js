import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { resetAlert } from '../../reducers/alertReducer';


const mapStateToProps = (state) => {
  const { message, variant } = state.alert;
  return { message, variant };
};
const mapDispatchToProps = { resetAlert };

class Alert extends React.Component {
  componentDidUpdate(prevProps) {
    const { message, resetAlert } = this.props;

    if (prevProps.message === '' && message !== '') {
      setTimeout(() => resetAlert(), 1000);
    }
  }

  render() {
    const { message, variant } = this.props;

    const Container = styled.div`
      &&& {
        max-width: 400px;
        position: absolute;
        top: 0px;
        left: 0;
        right: 0;
        margin: auto;
        border-radius: 0;
      }
    `;

    if (message === '') return null;

    return (
      <Container
        className={`alert alert-${variant} shadow-sm`}
        role="alert"
      >
        {message}
      </Container>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Alert),
);
