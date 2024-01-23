import React, { useEffect, useState } from "react";

const ApiDataDisplay = () => {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
                if(!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();

                setApiData(data);

            } catch(error){
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    },[]);

    return (
        <div>
            {loading && <p>Loading... </p>}
            {error && <p>Error: {error}</p>}
            {apiData && (
                <div>
                    <h2>API data</h2>
                    <p>Title: {apiData.title}</p>
                    <p>Completed: {apiData.completed ? 'yes' : 'No'}</p>
                </div>
            )}
        </div>
    );
};

export default ApiDataDisplay;