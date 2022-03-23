import {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {STRINGS} from '../constants/ko';
import {userType} from '../types';
import PublicInput from '../components/PublicInput';
import PublicBtn from '../components/PublicBtn';

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
      <PublicInput
        name={'id'}
        onChange={() => onChange}
      />
      <PublicInput
        type={'password'}
        name={'pw'}
        onChange={() => onChange}
      />
      <PublicBtn value={STRINGS.login} />
      <Link to={'/coins'}>
        <PublicBtn value={STRINGS.review} />
      </Link>
      <Link to={'/register'}>
        <PublicBtn value={STRINGS.register} />
      </Link>
    </Conatiner>
  )
}

export default Landing;

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`