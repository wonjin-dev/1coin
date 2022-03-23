import styled from 'styled-components';
import {BtntProps} from '../types';

const PublicBtn = (props: BtntProps) => {
  return (
    <Conatiner>
      <StyledBtn>
        <BtnValue>
          {props.value}
        </BtnValue>
      </StyledBtn>
    </Conatiner>
  )
}

export default PublicBtn;

const Conatiner = styled.div`
`

const StyledBtn = styled.button`
  width: 200px;
  height: 35px;
  border-radius: 10px;
`

const BtnValue = styled.span`
`