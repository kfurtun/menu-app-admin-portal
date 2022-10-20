import { proxy } from 'constants/constants';

const headers = {
  'Content-Type': 'application/json',
};

const daleteApi = <TBodyObject>(url: string, bodyObject: TBodyObject) => {
  return fetch(`${proxy}/${url}`, {
    method: 'DELETE',
    body: JSON.stringify(bodyObject),
    headers,
  });
};

export default daleteApi;
