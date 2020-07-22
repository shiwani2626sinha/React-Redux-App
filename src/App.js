import React from 'react';
import './App.css';
import CakeContainer from './componet/CakeContainer'
import {Provider} from 'react-redux'
import store from './redux/store'
import HooksCakeContainer from './componet/HooksCakeContainer';
import IceCreamContainer from './componet/IceCreamContainer';
import NewCakeContainer from './componet/newCakeContainer';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <HooksCakeContainer></HooksCakeContainer>
         <CakeContainer/>
         <IceCreamContainer></IceCreamContainer>
         <NewCakeContainer></NewCakeContainer>
      </div>
    </Provider>
    
  );
}

export default App;

