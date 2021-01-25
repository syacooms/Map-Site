import React, { useEffect } from 'react';
import firebase from '../firebase';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser, setUser } from '../redux/actions/user_action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  background-color: #f4f5fa;
`;

function App() {
  let history = useHistory();
  let dispatch = useDispatch();
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('유저확인!!', user);
      // 로그인할 경우 메인 페이지
      if (user) {
        history.push('/');
        dispatch(setUser(user));
        // 로그인 아닐 경우 로그인 페이지
      } else {
        history.push('/login');
        dispatch(clearUser());
      }
    });
  }, [dispatch, history]);

  if (isLoading) {
    return (
      <div
        className="fa-10x"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <FontAwesomeIcon icon={faSpinner} spin></FontAwesomeIcon>
      </div>
    );
  }

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
