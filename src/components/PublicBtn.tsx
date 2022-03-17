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
`

const BtnValue = styled.span`
`