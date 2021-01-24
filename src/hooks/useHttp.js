import { useState, useEffect } from 'react';

const useHttp = (fn) => {
    const [documents, setDocuments] = useState({
        count: 0,
        description: '',
        total_pages: 0,
        results: []
    });

    useEffect(() => {
        const fetchData = async () => {
            const { statusCode, data } = await fn();
            setDocuments(data)
        }

        fetchData();
    }, [fn]);

    return documents;
};

export default useHttp;
