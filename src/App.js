import React, { useEffect } from 'react';
import store from './redux/store';

function App() {
  useEffect(() => {
    console.log('test', store.getState());
  }, []);

  return (
    <div className="App">
      <div>Welcome to Filmbase</div>
      <button onClick={() => console.log(store.getState())}>Log State</button>
    </div>
  );
}

export default App;
