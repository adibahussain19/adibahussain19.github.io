// import { useState, useEffect } from 'react';

// const useFetchProject = (projectId) => {
//   const [project, setProject] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProject = async () => {
//       try {
//         const response = await fetch(`https://your-backend-url.com/api/projects/${projectId}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         setProject(result);
//       } catch (error) {
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProject();
//   }, [projectId]);

//   return { project, loading, error };
// };

// export default useFetchProject;