import './App.css';
import { Switch, Route } from 'react-router-dom';
import Register from './logs/logs_pages/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/register" component={ Register } />
      </Switch>
    </div>
  );
}

export default App;
