import { useState, useEffect } from 'react'
import { IData, IOpts, IJsonFetchResult } from '../models';

export default function useJsonFetch(url: string, opts: IOpts): [IJsonFetchResult] {
    const [data, setData] = useState<IData>();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

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
                
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const responseData = response.status === 200 ? await response.json() : null;
                setData(responseData);
                setError('');
            } catch (e) {
                const result: string = (e as Error).message
                setError(result);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, []);

    return [{data, loading, error}];
}