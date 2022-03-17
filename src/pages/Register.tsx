import {useState} from 'react';
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
    console.log('스테이트를 로컬 스토리지에 보내야 함');
  }
  
  return (
    <>
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
        onClick={() => onClickRegister}
      />
    </>
  )
}

export default Register;