import { proxy } from 'constants/constants';

const headers = {
  'Content-Type': 'application/json',
};

const postApi = <TBodyObject>(url: string, bodyObject: TBodyObject) => {
  return fetch(`${proxy}/${url}`, {
    method: 'POST',
    body: JSON.stringify(bodyObject),
    headers,
  });
};

export default postApi;
