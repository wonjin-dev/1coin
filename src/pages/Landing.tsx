import {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {STRINGS} from '../constants/ko';
import {userType} from '../types';
import {loginAtom} from '../atoms';
import PublicInput from '../components/PublicInput';
import PublicBtn from '../components/PublicBtn';
import {useSetRecoilState} from 'recoil';

const parseLocalStorage = (key: string) => {
  let target = localStorage.getItem(key);
  if(target === null){
    return null
  } else {
    return target = JSON.parse(target);
  }
}

const Landing = () => {
  const auth = useSetRecoilState(loginAtom);
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

  const onClickLogin = async() => {
    const origin: userType[] = await parseLocalStorage('user');
    for(let i=0; i<origin.length; i++){
      if(origin[i].id === user.id) {
        if(origin[i].pw === user.pw) {
          auth(true)
        } else {
          throw Error(STRINGS.noMatchPw);
        }
      } else {
        throw Error(STRINGS.noMatchId);
      }
    }
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
      <PublicBtn value={STRINGS.login} onClick={() => onClickLogin} />
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