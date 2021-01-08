import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import MainPage from './MainPage/MainPage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </div>
  );
}

export default App;
