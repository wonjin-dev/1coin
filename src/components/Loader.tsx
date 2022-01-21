import styled from "styled-components";
import {COLORS} from "../constants/colors";

type LoaderType = 'spin' | 'page';
interface Props {
  type: LoaderType;
  text?: string;
}

const Loader = (props: Props) => {
  return (
    <>
      {props.type === 'spin' ? (
        <ChartLoader>
          <p>spin loading</p>
        </ChartLoader>
      ) : ( 
        <DefaultLoader>
          <LoaderContent>{props.text}</LoaderContent>
        </DefaultLoader>)
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

const LoaderContent = styled.span`
  color: ${COLORS.mainTextColor}
`