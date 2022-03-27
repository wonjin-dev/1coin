import {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import {userAtom} from '../atoms';
import {STRINGS} from '../constants/ko';
import PublicBtn from '../components/PublicBtn';
import PublicInput from '../components/PublicInput';
import {userType} from '../types';
import checkOverlap from '../utils/checkOverlap';
const Register = () => {
  const [newUser, setNewUser] = useState<userType>({
    email: '',
    id: '',
    pw: ''
  });
  const [users, setUsers]= useRecoilState(userAtom);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  };
  
  const onClickRegister = () => {
    const overlapBool = checkOverlap(users, newUser.id);
    if(overlapBool === false) {
      setUsers([...users, newUser]);
    } else {
      // TODO:: 모달 추가하기
      throw new Error(STRINGS.overlapId);
    }
  };

  return (
    <Conatiner>
      <PublicInput
        name={'email'}
        value={newUser.email}
        onChange={onChange}
      />
      <PublicInput
        name={'id'}
        value={newUser.id}
        onChange={onChange}
      />
      <PublicInput
        name={'pw'}
        value={newUser.pw}
        onChange={onChange}
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
`;