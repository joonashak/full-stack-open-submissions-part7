const initialState = {
  message: '',
  variant: 'danger',
};

export default (state = initialState, action) => {
  const { message, variant, type } = action;

  switch (type) {
    case 'NEW_ALERT':
      return { message, variant };
    case 'RESET_ALERT':
      return initialState;
    default:
      return state;
  }
};

export const newAlert = (message, variant) => ({
  type: 'NEW_ALERT',
  message,
  variant,
});

export const resetAlert = () => ({ type: 'RESET_ALERT' });
