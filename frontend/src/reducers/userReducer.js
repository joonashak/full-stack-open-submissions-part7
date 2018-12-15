const initialState = {
  token: localStorage.getItem('token'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return { token: action.token };
    case 'UNSET_TOKEN':
      return { token: null };
    default:
      return state;
  }
};

export const setToken = token => ({
  type: 'SET_TOKEN',
  token,
});

export const unsetToken = () => ({ type: 'UNSET_TOKEN' });
