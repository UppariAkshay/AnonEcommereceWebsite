import {BrowserRouter, Route, Switch} from 'react-router-dom' 
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
