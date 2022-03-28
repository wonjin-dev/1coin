import styled from 'styled-components';
import PublicBtn from '../PublicBtn';

interface Props {
  onClickCancel: () => void;
}

const ConfirmModal = (props: Props) => {
  return (
    <>
      <ModalWrapper>
        <Container>
          <BtnContainer>
            <PublicBtn />
            <PublicBtn />
          </BtnContainer>
        </Container>
      </ModalWrapper>
    </>
  )
}

export default ConfirmModal;

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
`

const Container = styled.div`
  display: flex;
  padding: 50px;
  background-color: white;
`

const BtnContainer = styled.div`
  display: flex;
`