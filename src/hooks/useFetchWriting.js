import { useState, useEffect } from 'react';

export default function useFetchWriting(){
    const [writings, setWritings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5001/writing')
            .then(response => response.json())
            .then(data => {
                setWritings(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return { writings, loading, error };
}

