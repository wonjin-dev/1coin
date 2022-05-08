import {useCallback, useState} from 'react';
import styled from 'styled-components';
import FormButton from './components/FormButton';
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
    // true 이면 페이지 리우팅 | false이면 모달 노출
    console.log('id', userInfo?.id);
    console.log('pw', userInfo?.pw);
  }, [userInfo]);

  return (
    <Container>
      <LoginForm>
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
        {/* 로그인 버튼? 벡터 이미지? 렌더링 */}
        <SubmitButton onClick={onClickLogin}>로그인</SubmitButton>
      </LoginForm>
      <FormButton
        buttonStyle={undefined}
        value={undefined}
        onClickButton={() => console.log('회원가입')} 
      />
      <FormButton
        buttonStyle={undefined}
        value={undefined}
        onClickButton={() => console.log('둘러보기')} 
      />
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const LoginForm = styled.div`
`;

const SubmitButton = styled.button`
`;