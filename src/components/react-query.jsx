'use client';

import Router from 'next/navigation';

import { QueryClient, QueryClientProvider, Hydrate, MutationCache, QueryCache } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { removeCookie } from '../utils/cookie';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      retryOnMount: true,
      refetchOnMount: true
    }
  },
  queryCache: new QueryCache({
    onSuccess: (data) => {
      return data;
    },
    onError: (error, query) => {
      apiErrorHandler(error);
      return error.response;
    }
  }),
  mutationCache: new MutationCache({
    onSuccess: (data) => {
      return data;
    },
    onError: (error, query) => {
      apiErrorHandler(error);
      return error.response;
    }
  })
});

const apiErrorHandler = (error) => {
  const errorConfig = error.config;

  if (error.response?.data?.detail) {
    alert(error.response.data.detail);
  }

  // 401 Unauthorized
  if (error.response.status === 401) {
    sessionClear();
    Router.push('/login');
    return Promise.reject(error);
  } else {
    // 403 Forbidden
    if (error.response.status === 403) {
    }

    // 500 Internal Server Error
    return Promise.reject(error);
  }
};

const sessionClear = () => {
  removeCookie('jwt');
};

export default function ReactQueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
