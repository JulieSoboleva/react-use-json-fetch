import useJsonFetch from '../hooks/useJsonFetch'
import { IBaseUrl } from '../models'

export default function Loading({ baseURL }: IBaseUrl) {
    const [{loading}] = useJsonFetch(baseURL + 'loading', {method: 'GET', content: {}});
    return (
        <div className='loading'>
            {loading && <span>LOADING...</span>}
        </div>
    );
}