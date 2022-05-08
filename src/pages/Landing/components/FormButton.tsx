import {CSSProperties} from 'styled-components';

interface FormButtonProps {
  buttonStyle?: CSSProperties;
  value: any;
  onClickButton: () => void;
}

const FormButton = (props: FormButtonProps) => {
  return (
    <button style={props.buttonStyle} onClick={props.onClickButton}>{props.value}</button>
  );
};

export default FormButton;