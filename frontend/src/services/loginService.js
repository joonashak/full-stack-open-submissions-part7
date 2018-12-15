import axios from 'axios';
import { apiUri } from '../utils/config';


const uri = `${apiUri}/login`;

const login = async (username, password) => {
  try {
    const result = await axios.post(uri, { username, password });
    return result.data;
  } catch (error) {
    return { error: true };
  }
};

export default { login };
