import styled from 'styled-components';

interface InputProps {
  inputName: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  return (
    <StlyedInput 
      name={props.inputName}
      placeholder={props.inputName}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;

const StlyedInput = styled.input`
`;