import store from '../index';

const env = process.env.NODE_ENV;

export const apiUri = env === 'production'
  ? '/api'
  : 'http://localhost:3003/api';

export const getAxiosConfig = () => {
  const { token } = store.getState().user;
  return {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
};
