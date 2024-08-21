import Loading from './components/Loading';
import Success from './components/Success';
import Error from './components/Error';

const baseURL = 'https://react-use-json-fetch-server.onrender.com/';

export default function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='container_column'>
          <Success baseURL={baseURL} />
          <Error baseURL={baseURL} />
          <Loading baseURL={baseURL} />
        </div>
      </div>
    </div>
  );
}