import { useState, useEffect } from 'react';

const useHttp = (fn) => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { statusCode, data } = await fn();
            setDocuments(data.results)
        }

        fetchData();
    }, [fn]);

    return documents;
};

export default useHttp;
