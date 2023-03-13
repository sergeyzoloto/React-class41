import { useMemo, useState } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useMemo(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw Error('No connection');
      const data = await response.json();
      setData(data);
    } catch (error) {
      setErrorMessage(`URL: ${url} Error:${error}`);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  return { data, isLoading, errorMessage };
}
