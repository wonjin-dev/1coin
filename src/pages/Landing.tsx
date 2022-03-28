import {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useRecoilState, useRecoilValue} from 'recoil';
import {userAtom, authAtom} from '../atoms';
import {STRINGS} from '../constants/ko';
import {userType} from '../types';
import PublicInput from '../components/PublicInput';
import PublicBtn from '../components/PublicBtn';

const Landing = () => {
  const [user, setUser] = useState<userType>({
    id: undefined,
    pw: undefined
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [auth, setAuth] = useRecoilState(authAtom);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const onClickLogin = () => {
    const origin = useRecoilValue(userAtom);
    for(let i=0; i<origin.length; i++){
      if(origin[i].id === user.id){
        if(origin[i].pw === user.pw){
          setAuth(true)
          // TODO:: Home화면으로 라우팅
        } else {
          // 비밀번호가 틀립니다
        } 
      } else {
        // 일치하는 아이디가 없습니다
      }
    }
  };

  return (
    <Conatiner>
      <PublicInput
        name={'id'}
        onChange={onChange}
      />
      <PublicInput
        type={'password'}
        name={'pw'}
        onChange={onChange}
      />
      <PublicBtn value={STRINGS.login} onClick={onClickLogin} />
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