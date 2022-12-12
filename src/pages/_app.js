import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { queryClient } from 'src/components/react-query';

import wrapper from '../redux';

import 'assets/scss/reset.scss';

function MyApp({ Component, pageProps }) {
  const { store, props } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
