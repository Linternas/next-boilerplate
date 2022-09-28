import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import API from 'src/api';

import { counterAdd, counterMinus } from 'src/redux/modules/counter';

import { CounterButton } from 'src/components/styled/CounterButton.styled';
import { CounterText } from 'src/components/styled/CounterText.styled';

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
    console.log(apiData);
  }, [apiData]);

  return (
    <>
      <div>
        <CounterText>{data}</CounterText>

        <CounterButton onClick={handleClickAddCount}>+</CounterButton>
        <CounterButton onClick={handleClickMinusCount}>-</CounterButton>
      </div>
    </>
  );
}
