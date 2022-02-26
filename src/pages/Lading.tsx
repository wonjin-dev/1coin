import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {COLORS} from "../constants/colors";
import {IMAGES} from "../constants/images";

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
    <Link to={"/coins"}>
        <BackgroundImage>
          <Header>
            <Title>{text}</Title>
          </Header>
        </BackgroundImage>
    </Link>
  )
}

export default Landing;

const BackgroundImage = styled.div`
  background-image: url(${IMAGES.landignBackImg});
  width: 100vw;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 8rem;
  color: ${COLORS.mainTextColor};
`;