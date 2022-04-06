import styled from 'styled-components';
import {BtnProps} from '../types';

const PublicBtn = (props: BtnProps) => {
  return (
    <>
      <StyledBtn onClick={props.onClick}>
        <BtnValue>
          {props.value}
        </BtnValue>
      </StyledBtn>
    </>
  );
};

export default PublicBtn;

const StyledBtn = styled.button`
  width: 200px;
  height: 35px;
  border-radius: 10px;
`;

const BtnValue = styled.span`
`;