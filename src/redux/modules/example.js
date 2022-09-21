// actionTypes
export const ACTION_TYPE = 'example/ACTION_TYPE';

// actions
export const exampleAction = () => {
  return {
    type: ACTION_TYPE
  };
};

// reducers
const initialState = {
  data: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPE:
      return {
        ...state,
        data: 'example'
      };

    default:
      return state;
  }
}
