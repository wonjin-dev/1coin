import styled, {keyframes} from "styled-components";
import {COLORS} from "../constants/colors";
import {LoaderProps} from "../types";

const Loader = (props: LoaderProps) => {
  return (
    <>
      {props.type === 'spin' 
        ? (
        <ChartLoader>
          <ImageInLoader src={props.img} />
        </ChartLoader>
        ) 
        : (
          <DefaultLoader>
            <TextInLoader>{props.text}</TextInLoader>
          </DefaultLoader>
        )
      }
    </>
  )
}

export default Loader;

const DefaultLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 20px;
  font-weight: 700;
`
const ChartLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 20px;
`

const TextInLoader = styled.span`
  color: ${COLORS.mainTextColor}
`

const spinAnimation = keyframes`
  0% {
    transform: none;
  }
  50% {
    transform: rotateY(360deg);
  }
  100% {
    transform: none;
  }
}
`

const ImageInLoader = styled.img`
  width: 50px;
  height: 50px;
  animation: ${spinAnimation} 1s linear infinite; 
`