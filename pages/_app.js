import 'regenerator-runtime/runtime';
import { useStore } from '@/utils/store';
import { Provider } from 'react-redux';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
