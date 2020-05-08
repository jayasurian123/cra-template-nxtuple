export const FETCH_TODO = '[todo] fetch';
export const SET_TODO = '[todo] set';

export const fetchTodo = (id) => ({
  type: FETCH_TODO,
  payload: id
});

export const setTodo = (data) => ({
  type: SET_TODO,
  payload: data
});

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default todoReducer;

// selectors
