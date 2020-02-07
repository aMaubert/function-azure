import axios from 'axios';

const instance = () => {
  const newInstance = axios.create();

  return newInstance;
};

export const axiosService = instance;
