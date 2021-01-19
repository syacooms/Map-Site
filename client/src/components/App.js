import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f4f5fa;
`;

function App() {
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </Container>
  );
}

export default App;
