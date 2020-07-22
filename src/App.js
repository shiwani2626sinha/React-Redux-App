import React from 'react';
import './App.css';
import CakeContainer from './componet/CakeContainer'
import {Provider} from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './componet/HooksCakeContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <HooksCakeContainer></HooksCakeContainer>
         <CakeContainer/>
      </div>
    </Provider>
    
  );
}

export default App;

