import { useState, useEffect } from 'react';

export default function useFetchProjects(){
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Fetching projects from the server...");
        fetch('http://localhost:5001/projects')
            .then(response => response.json())
            .then(data => {
                console.log("Projects data received:", data);
                setProjects(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    return { projects, loading, error };
}
