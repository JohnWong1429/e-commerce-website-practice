import { useState, useEffect } from 'react';
import { makeRequest } from '../utils/makeRequest';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await makeRequest.get(url);
            const res_data = response.data.data;
            if (res_data.length) {
                setData(res_data);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setError(true);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error};
}

export default useFetch;
