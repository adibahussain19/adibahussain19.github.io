import useFetchWriting from '../hooks/useFetchWriting';

export default function WritingFullComponent({writingId}) {
    
    const { writing, loading: writingLoading, error: writingError } = useFetchWriting(writingId);
    
    if (writingLoading) 
        return <p>Loading...</p>;

    if (writingError) 
        return <p>Error fetching writing: {writingError.message}</p>;

    return(
        <div>
            <h2>Writing: {writing.title}</h2>
            <p>{writing.summary}</p>
        </div>

    );    
};

// components/ProjectComponent.js
// import React from 'react';
// import useFetchProject from '../hooks/useFetchProject';
// import useFetchWriting from '../hooks/useFetchWriting';

// const ProjectComponent = ({ projectId, writingId }) => {
//   const { project, loading: projectLoading, error: projectError } = useFetchProject(projectId);
//   const { writing, loading: writingLoading, error: writingError } = useFetchWriting(writingId);

//   if (projectLoading || writingLoading) return <p>Loading...</p>;
//   if (projectError) return <p>Error fetching project: {projectError.message}</p>;
//   if (writingError) return <p>Error fetching writing: {writingError.message}</p>;

//   return (
//     <div>
//       <h1>Project: {project.name}</h1>
//       <p>{project.description}</p>
//       <h2>Writing: {writing.title}</h2>
//       <p>{writing.content}</p>
//     </div>
//   );
// };
