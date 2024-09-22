import { useState, useEffect } from 'react';

const useFetchWriting = (writingId) => {
  const [writing, setWriting] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchWriting = async () => {
      try {
        const response = await fetch(`http://localhost:5001/writing/${writingId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setWriting(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWriting();
  }, [writingId]);

  return { writing, loading, error };
};

export default useFetchWriting;