import Loading from './components/Loading';
import Success from './components/Success';
import Error from './components/Error';

// const baseURL = 'https://ra-http-crud.herokuapp.com/';
const baseURL = 'http://localhost:7070/';

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