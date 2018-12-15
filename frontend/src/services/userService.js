import axios from 'axios';
import { apiUri } from '../utils/config';


const uri = `${apiUri}/users`;

const findAll = async () => {
  try {
    const result = await axios.get(uri);
    return result.data;
  } catch (error) {
    return { error: true };
  }
};

export default { findAll };
