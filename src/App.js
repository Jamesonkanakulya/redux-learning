import React from "react";
import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './components/redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <CakeContainer/>
    </Provider>
    </div>
  );
}

export default App;
