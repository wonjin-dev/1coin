import {useCallback, useState} from 'react';
import styled from 'styled-components';
import Input from './components/Input';

type LoginInputProps = {
  id?: string;
  pw?: string;
}

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState<LoginInputProps>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  const onClickLogin = useCallback(() => {
    console.log('userInfo 넘겨서 로그인 인증 체크');
    console.log('id', userInfo?.id);
    console.log('pw', userInfo?.pw);
  }, [userInfo]);

  return (
    <>
      <Input
        inputName={'id'}
        value={userInfo?.id}
        onChange={onChange}
      />
      <Input
        inputName={'pw'}
        value={userInfo?.pw}
        onChange={onChange}
      />
      <SubmitButton onClick={onClickLogin}>로그인</SubmitButton>
    </>
  );
};

export default LoginPage;

const SubmitButton = styled.button`
`;