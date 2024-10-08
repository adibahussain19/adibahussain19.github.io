import useFetchProjects from "../hooks/useFetchProjects";

export default function ProjectsPage(){
    const {projects, loading, error} = useFetchProjects();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return(
        <div>
            <h1>CS Projects</h1>
            {projects.map((project, index)=>(
                <div key={index} className="writing-item">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    {/* <p>{project.imageURL}</p> */}
                </div>
            ))}
        </div>
    )

}
