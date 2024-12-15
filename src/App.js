import {BrowserRouter, Route, Component, Routes} from 'react-router-dom' 
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <ProtectedRoute path='/' component={Home} />
        <Route path='/login' component={Login} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
