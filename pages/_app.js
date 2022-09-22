import '../styles/globals.css';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import { queryClient } from 'src/components/react-query';

import wrapper from '../src/redux';

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default wrapper.withRedux(MyApp);
