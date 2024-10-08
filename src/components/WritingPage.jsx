import useFetchWriting from '../hooks/useFetchWriting';

export default function WritingPage() {
    const { writings, loading, error } = useFetchWriting();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Writing Samples</h1>
            {writings.map((writing, index) => (
                <div key={index} className="writing-item">
                    <h2>{writing.title}</h2>
                    <p>{writing.summary}</p>
                    <a href={writing.fileLink}>Read More</a>
                </div>
            ))}
        </div>
    );

};
