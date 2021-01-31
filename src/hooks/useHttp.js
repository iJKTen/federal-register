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
            const response = await fn();
            if (response.data.count > 1) {
                setDocuments(response.data);
            }
        }

        fetchData();
    }, [fn]);

    return documents;
};

export default useHttp;
