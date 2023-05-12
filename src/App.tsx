import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchUsers } from './store/reducers/ActionCreators';
import PostContainer from './components/PostContainer';

function App() {
  // const { count } = useAppSelector(state => state.userReducer);
  // const { increment } = userSlice.actions;
  const dispatch = useAppDispatch();
  const { isLoading, error, users } = useAppSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      {/*<h1>{count}</h1>*/}
      {/*<button onClick={()=> dispatch(increment(10))}>INCREMENT</button>*/}
      {/*{isLoading && <h1>Loading...</h1>}*/}
      {/*{users.length > 0 && JSON.stringify(users, null, 2)}*/}
      {/*{error && <h1>{error}</h1>}*/}
      <PostContainer />
    </div>
  );
}

export default App;
