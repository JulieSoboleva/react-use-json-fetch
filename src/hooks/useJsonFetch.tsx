import { useState, useEffect } from 'react'
import { IData, IOpts, IJsonFetchResult } from '../models';

export default function useJsonFetch(url: string, opts: IOpts): [IJsonFetchResult] {
    const [data, setData] = useState<IData>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const { method = 'GET', content } = opts;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url, method === 'GET' || method === 'HEAD' ?
                    {
                        method: method,
                        headers: new Headers({ 'content-type': 'application/json' }),
                    } :
                    {
                        method: method,
                        headers: new Headers({ 'content-type': 'application/json' }),
                        body: content ? JSON.stringify({ content }) : null,
                    }
                );
                
                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error(responseData.status);
                }
                
                setData(responseData);
                setError(null);
            } catch (e) {
                if (e instanceof Error) {
                    setError(e);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, []);

    return [{data, loading, error}];
}