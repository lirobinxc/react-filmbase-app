import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import errorReducer from './reducers/errorReducer';
import movieReducer from './reducers/movieReducer';

const reducers = combineReducers({
  errors: errorReducer,
  movies: movieReducer,
});

const initialState = {};
const middleware = applyMiddleware(thunk);

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(middleware)
);

export default store;
