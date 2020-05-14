import React, {useState} from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'; 
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import { useEffect } from 'react';

function App() {
  const [view, setView] = useState('signUp');
  const [isLogged, setIsLogged] = useState(false);

  const changeView = () => {
    if(view==='signUp') setView('signIn');
    else setView('signUp')
  }

  return(
    <HashRouter>
      <Switch>
        <Route exact path='/login'>
          {view === 'signUp' ? <SignUp changeView={changeView}/> : <SignIn changeView={changeView} setIsLogged={() => setIsLogged(!isLogged)}/>} 
        </Route>
        <PrivateRoute path='/' auth={isLogged}>
          <Dashboard/>
        </PrivateRoute>
      </Switch>
    </HashRouter>
    
    
  );
}

export default App;
