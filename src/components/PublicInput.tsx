import styled from 'styled-components';
import {COLORS} from '../constants/colors';
import {InputProps} from '../types';

const PublicInput = (props: InputProps) => {
  return (
    <StyledInput
      type={props.type}
      name={props.name}
      placeholder={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default PublicInput;

const StyledInput = styled.input`
  width: 300px;
  height: 70px;
  background-color: ${COLORS.mainTextColor};
  border: none;
  border-radius: 10px;
  font-size: 40px;
  margin-bottom: 10px;
`