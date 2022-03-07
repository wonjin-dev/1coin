import {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {STRINGS} from '../constants/ko';
import {userType} from '../types';
import PublicInput from '../components/PublicInput';

const Landing = () => {
  const [user, setUser] = useState<userType>({
    id: undefined,
    pw: undefined
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Conatiner>
      <Content>
        <form
          method='post'
          // action=''
        >
          <PublicInput
            name={'id'}
            onChange={() => onChange}
          />
          <PublicInput
            type={'password'}
            name={'pw'}
            onChange={() => onChange}
          />
          <SubmitBtn>
            {STRINGS.login}
          </SubmitBtn>
        </form>
        <ButtonContainer>
          <Link to={'/coins'}>
            <SubmitBtn>
              {STRINGS.review}
            </SubmitBtn>
          </Link>
          <Link to={'/register'}>
            <SubmitBtn>
              {STRINGS.register}
            </SubmitBtn>
          </Link>
        </ButtonContainer>
      </Content>
    </Conatiner>
  )
}

export default Landing;

const Conatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`

const Content = styled.div`
  flex-direction: column;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

const SubmitBtn = styled.button`
  width: 80px;
  height: 30px;
`