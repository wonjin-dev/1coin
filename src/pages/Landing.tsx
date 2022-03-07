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
    <>
      <form>
        <PublicInput
          name={'id'}
          onChange={() => onChange}
        />
        <PublicInput
          name={'pw'}
          onChange={() => onChange}
        />
        <SubmitBtn>
          {STRINGS.login}
        </SubmitBtn>
      </form>
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
    </>
  )
}

export default Landing;

const SubmitBtn = styled.button`
  width: 80px;
  height: 30px;
`