import styled from 'styled-components';
import {COLORS} from '../constants/colors';
import {InputProps} from '../types';

const PublicInput = (props: InputProps) => {
  return (
    <StyledInput
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default PublicInput;

const StyledInput = styled.input`
  background-color: ${COLORS.mainTextColor};
  border: none;
  border-radius: 10px;
`