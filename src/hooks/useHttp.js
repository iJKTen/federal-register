import { useState, useEffect } from 'react';

const useHttp = (fn) => {
    const initialState = {
        count: 0,
        description: '',
        total_pages: 0,
        results: []
    };
    const [documents, setDocuments] = useState(initialState);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fn();
            if (response.data.count > 0) {
                setDocuments(response.data);
            } else {
                setDocuments({
                    results: [],
                    ...response.data
                })
            }
        }

        fetchData();
    }, [fn]);

    return documents;
};

export default useHttp;
