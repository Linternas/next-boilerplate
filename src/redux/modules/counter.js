export const COUNT_ADD = 'counter/COUNT_ADD';
export const COUNT_MINUS = 'counter/COUNT_MINUS';

export const counterAdd = () => {
  return {
    type: COUNT_ADD
  };
};

export const counterMinus = () => {
  return {
    type: COUNT_MINUS
  };
};

const initialState = {
  count: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case COUNT_ADD:
      return {
        ...state,
        count: state.count + 1
      };

    case COUNT_MINUS:
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return state;
  }
}
