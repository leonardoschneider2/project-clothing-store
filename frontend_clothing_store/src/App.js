import './App.css';
import { Switch, Route } from 'react-router-dom';
import Logs from './logs/Logs';

function App() {
  return (
    <div className="App">
      <a href="/logs/register">REGISTER</a>
      <a href="/logs/login">LOGIN</a>
      <Switch>
        <Route path="/logs" component={ Logs } />
      </Switch>
    </div>
  );
}

export default App;
