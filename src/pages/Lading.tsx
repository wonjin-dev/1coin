import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {COLORS} from "../constants/colors";
import {TiArrowRightThick} from "react-icons/ti";

interface Props {
  title: string;
}

const Landing = (props: Props) => {
  const title = props.title;
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + title[count]);
      setCount(count + 1);
    }, 230);
    if(count === title.length) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });

  return (
    <>
      <Header>
        <Title>{text}</Title>
      </Header>
      <Link to={"/coins"}>
        <TiArrowRightThick />
      </Link>
    </>
  )
}

export default Landing;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-size: 160px;
  font-weight: 500;
  color: ${COLORS.mainTextColor};
`;