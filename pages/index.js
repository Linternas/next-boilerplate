import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import API from 'src/api';

import { counterAdd, counterMinus } from 'src/redux/modules/counter';

export default function Home() {
  const dispatch = useDispatch();

  const { apiData } = useQuery([], async () => {
    return await API.get('https://jsonplaceholder.typicode.com/todos/1')
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
  });

  const data = useSelector((state) => {
    return state.counter.count;
  });

  const handleClickAddCount = () => {
    dispatch(counterAdd());
  };

  const handleClickMinusCount = () => {
    dispatch(counterMinus());
  };

  useEffect(() => {
console.log(apiData)
  }, [apiData])

  return (
    <>
      <div>
        <p>{data}</p>

        <button onClick={handleClickAddCount}>+</button>
        <button onClick={handleClickMinusCount}>-</button>
      </div>
      <div></div>
    </>
  );
}
