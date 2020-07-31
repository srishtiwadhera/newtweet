import React from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Home from './components/Home'
const store = ConfigureStore();
function App() {
  return (
    <Provider store={store}>
    <div>
      <Home></Home>
      
    </div>
    </Provider>
  );
}

export default App;
