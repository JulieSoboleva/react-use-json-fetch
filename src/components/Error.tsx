import useJsonFetch from '../hooks/useJsonFetch'
import { IBaseUrl } from '../models'

export default function Error({ baseURL }: IBaseUrl) {
    const [{error}] = useJsonFetch(baseURL + 'error', {method: 'GET', content: []});
    
    return (
        <div style={{ color: 'red' }}>
            {error && <span>ERROR: {error.message}</span>}
        </div>
    );
}