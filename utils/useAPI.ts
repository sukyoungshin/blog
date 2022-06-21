import { useEffect, useState } from "react";

const BASE_URL = 'http://localhost:9000/';
const options = { method: 'GET' };
export const useAPI = (API_URL: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const RequestAPI = async () => {
    setLoading(true);
    setError(false);

    try {
      await fetch(BASE_URL + API_URL, options)
        .then(res => res.json())
        .then(res => {
          setData(res);
          setLoading(false);
        });
    } catch (e) {
      console.error('error : ', e);
      setError(true);
    }
  };

  useEffect(() => {
    RequestAPI();
  }, []);

  return { loading, error, data };
};