import firebase from '../../firebase';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import md5 from 'md5';
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

function RegisterPage() {
  const { register, watch, errors, handleSubmit } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState('');
  const [loading, setLoading] = useState(false);

  const password = useRef();
  password.current = watch('password');

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      let createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      //console.log('createdUser', createdUser);

      await createdUser.user.updateProfile({
        displayName: data.name,
        photoURL: `http://gravatar.com/avatar/${md5(
          createdUser.user.email,
        )}?d=identicon`,
      });

      // firebase database save
      await firebase.database().ref('users').child(createdUser.user.uid).set({
        name: createdUser.user.displayName,
        image: createdUser.user.photoURL,
      });
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
      <Title>Register</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <Input
          name="email"
          type="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <Warnning>이메일을 입력해주세요.</Warnning>}
        <label>Name</label>
        <Input name="name" ref={register({ required: true, maxLength: 10 })} />
        {errors.name && errors.name.type === 'required' && (
          <Warnning>이름을 입력해주세요.</Warnning>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <Warnning>이름은 최대 10자 이내로 입력해주세요.</Warnning>
        )}
        <label>Password</label>
        <Input
          name="password"
          type="password"
          ref={register({ required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === 'required' && (
          <Warnning>비밀번호가 작성되지 않았습니다.</Warnning>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <Warnning>비밀번호가 최소 6자리 입니다.</Warnning>
        )}
        <label>Password Confirm</label>
        <Input
          name="password_confirm"
          type="password"
          ref={register({
            required: true,
            validate: (value) => value === password.current,
          })}
        />
        {errors.password_confirm &&
          errors.password_confirm.type === 'required' && (
            <Warnning>비밀번호가 작성되지 않았습니다.</Warnning>
          )}
        {errors.password_confirm &&
          errors.password_confirm.type === 'validate' && (
            <Warnning>비밀번호가 일치하지 않습니다.</Warnning>
          )}
        {errorFromSubmit && <p>{errorFromSubmit}</p>}
        <Submit type="submit" value="회원가입" disabled={loading} />
        <Link to="login">이미 아이디가 있다면 ... </Link>
      </Form>
    </Container>
  );
}

export default RegisterPage;
