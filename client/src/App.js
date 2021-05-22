import React, {useEffect} from 'react'
import {Provider} from "react-redux";
import  {store, persistor} from "./inc/redux/store";
import {BrowserRouter as Router} from 'react-router-dom'
import {PersistGate} from "redux-persist/integration/react";
import Routes from "./inc/root/Routes";
import {LoadUser} from "./inc/redux/actions/login/Authentication";
import SetAuthToken from "./inc/utils/SetAuthToken";

if (localStorage.token) {
    SetAuthToken(localStorage.token);
}
function App() {
    useEffect(()=>{
        store.dispatch(LoadUser())
    },[])
  return (
      <Provider store={store}>
          <Router>
              <PersistGate persistor={persistor}>
                  <Routes/>
              </PersistGate>
          </Router>
      </Provider>
  );
}

export default App;
