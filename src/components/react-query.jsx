import { MutationCache, QueryCache, QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      apiErrorHandler(error);
      return error.response;
    },
    onSuccess: (data) => {}
  }),
  mutationCache: new MutationCache({
    onError: (error, query) => {
      apiErrorHandler(error);
      return error.response;
    }
  })
});

const apiErrorHandler = (error) => {
  // 401 Unauthorized
  if (error.response.status === 401) {
    return Promise.reject(error);
  } else {
    // 403 Forbidden
    if (error.response.status === 403) {
    }

    // 500 Internal Server Error
    return Promise.reject(error);
  }
};
