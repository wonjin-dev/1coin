import {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {STRINGS} from '../constants/ko';
import PublicBtn from '../components/PublicBtn';
import PublicInput from '../components/PublicInput';

const Register = () => {
  const [userInfo, setUserInfo]= useState({
    email: undefined,
    id: undefined,
    pw: undefined
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };
  
  const onClickRegister = () => {
    localStorage.setItem('user', JSON.stringify(userInfo));
  }

  return (
    <Conatiner>
      <PublicInput
        name={'email'}
        value={userInfo.email}
        onChange={() => onChange}
      />
      <PublicInput
        name={'id'}
        value={userInfo.id}
        onChange={() => onChange}
      />
      <PublicInput
        name={'pw'}
        value={userInfo.pw}
        onChange={() => onChange}
      />
      <PublicBtn
        value={STRINGS.register}
        onClick={onClickRegister}
      />
      <Link to="/">
        <PublicBtn
          value={STRINGS.back}
        />
      </Link>
    </Conatiner>
  )
}

export default Register;

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`