import axios from 'axios';
import { useSelector } from 'react-redux';
export const useAxios = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const httpRequest = async ({
    url,
    method,
    body = null,
    params = null,
    prefix = true,
  }) => {
    if (method.toUpperCase() === 'GET') {
      try {
        const response = await axios.get(
          `${prefix ? 'https://api.pestelecom.ir/v1' : ''}${url}`,
          {
            params: params,
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.status === 200) {
          return response;
        }
      } catch (error) {
        return null;
      } finally {
      }
    } else if (method.toUpperCase() === 'POST') {
      try {
        const response = await axios.post(
          `${prefix ? 'https://api.pestelecom.ir/v1' : ''}${url}`,
          body,
          {
            params: params,
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        if (response.statusText === 'OK') return response;
      } catch (error) {
        return null;
      } finally {
      }
    }
  };
  return httpRequest;
};
