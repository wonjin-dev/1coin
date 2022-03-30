import styled from 'styled-components';
import {STRINGS} from '../../constants/ko';
import PublicBtn from '../PublicBtn';

interface Props {
  msg: string;
  onClickConfirm: () => void;
}

const AlertModal = (props: Props) => {
  return (
    <>
      <ModalWrapper>
        <Container>
          <Msg>
            {props.msg}
          </Msg>
          <PublicBtn
            value={STRINGS.confirm}
            onClick={props.onClickConfirm}
          />
        </Container>
      </ModalWrapper>
    </>
  )
}
  
export default AlertModal;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

const Container = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8%;
  background-color: ${(props => props.theme.textColor)};
  border-radius: 10px;
`;

const Msg =styled.div`
  color: ${(props => props.theme.bgColor)};;
  width: 100%;
  height: 100%;
  display:flex;
  justify-content: center;
  margin-bottom: 20px;
`