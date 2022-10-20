import { proxy } from 'constants/constants';

const getApi = async (url: string) => {
  return fetch(`${proxy}/${url}`).then((response) => response.json());
};

export default getApi;
