import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import {userAtom} from '../atoms';
import {STRINGS} from '../constants/ko';
import {userType} from '../types';
import {onSet} from '../utils/storage';
import {checkOverlap} from '../utils/checkOverlap';
import PublicInput from '../components/PublicInput';
import PublicBtn from '../components/PublicBtn';
import ConfirmModal from '../components/modals/ConfirmModal';
import AlertModal from '../components/modals/AlertModal';

const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [finish, setFinish] = useState(false);
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
    const overlapBool = checkOverlap({
      origin: users,
      key: 'id',
      new: newUser.id || ''
    });
    
    if(overlapBool === false) {
      setUsers([...users, newUser]);
      onSet('users', users, false);
      setFinish(true);
    } else {
      setShowAlertModal(true);
    }
  };

  useEffect(() => {
    if(finish === true) {
      window.location.replace('http://localhost:3000/1coin/');
    }
  }, [setFinish]);

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
        onClick={() => setShowModal(true)}
      />
      <Link to="/">
        <PublicBtn
          value={STRINGS.back}
        />
      </Link>
      {showModal && 
        <ConfirmModal 
          onClickConfirm={onClickRegister}
          onClickCancel={() => setShowModal(false)} />
      }
      {showAlertModal &&
        <AlertModal 
          msg={STRINGS.overlapId}
          onClickConfirm={() => setShowAlertModal(false)} 
        />
      }
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