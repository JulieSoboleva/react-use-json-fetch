import useJsonFetch from '../hooks/useJsonFetch'
import { IBaseUrl } from '../models';

export default function Success({ baseURL }: IBaseUrl) {
    const [{data}] = useJsonFetch(baseURL + 'data', {method: 'GET', content: []});
    return (
        <div style={{ color: 'green' }}>
            {data && <span>SUCCESS! Status: {data.status}</span>}
        </div>
    );
}