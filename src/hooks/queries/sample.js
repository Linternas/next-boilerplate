import axios from 'axios';
import { useQuery, useInfiniteQuery } from 'react-query';
import * as queryKeys from 'src/constant/queryKeys';

export function baseQuery({ storeCode, options } = {}) {
  return useQuery([storeCode], () => axios.get('https://jsonplaceholder.typicode.com/todos/1'), {
    ...options
  });
}

export function useVoucher({ storeCode }) {
  return baseQuery({ storeCode });
}
