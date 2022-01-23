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
    <>
      <Link to={"/coins"}>
      <MainContainer>
        <BackgroundImage>
          <Img src={IMAGES.LandignBackImg} />
          <Cover />
          <TitleContainer>
            <Title>{text}</Title>
          </TitleContainer>
        </BackgroundImage>
      </MainContainer>
    </Link>
    </>
  )
}

export default Landing;

const MainContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 90%;
  height: 90vh;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  position: fixed;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Cover = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(41, 48, 71, 0.55);
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 200px;
  color: ${COLORS.mainTextColor};
  margin-left: 25px;
`;