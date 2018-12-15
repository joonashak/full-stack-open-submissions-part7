import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import userReducer from './reducers/userReducer';
import alertReducer from './reducers/alertReducer';


const reducers = combineReducers({
  alert: alertReducer,
  user: userReducer,
});
const store = createStore(reducers);
store.subscribe(() => localStorage.setItem('token', store.getState().user.token));
export default store;

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
