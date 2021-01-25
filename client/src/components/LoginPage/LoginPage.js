import firebase from '../../firebase';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const Title = styled.h3`
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`;

const Form = styled.form`
  margin: 0 auto;
`;

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Warnning = styled.p`
  color: #bf1650;

  ::before {
    display: inline;
    content: '⚠ ';
  }
`;

const Submit = styled.input`
  display: block;
  background: #4db3f7;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 40px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;

  :hover {
    background: #4dbfff;
  }
`;

function LoginPage() {
  const { register, errors, handleSubmit } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    console.log('Login-data', data);
    try {
      setLoading(true);
      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
      setLoading(false);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit('');
      }, 5000);
    }
  };
  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>E-mail</label>
        <Input
          name="email"
          type="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <Warnning>이메일을 입력해주세요</Warnning>}
        <label>Password</label>
        <Input
          name="password"
          type="password"
          ref={register({ required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === 'required' && (
          <Warnning>비밀번호는 필수입니다.</Warnning>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <Warnning>비밀번호는 최소 6자리 입니다.</Warnning>
        )}

        {errorFromSubmit && <p>{errorFromSubmit}</p>}
        <Submit type="submit" value="로그인" disabled={loading} />
        <Link to="register">회원가입</Link>
      </Form>
    </Container>
  );
}

export default LoginPage;
