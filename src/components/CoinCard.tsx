import {Link} from "react-router-dom";
import styled from "styled-components";
import {COLORS} from "../constants/colors";

interface Props {
  coinId: string;
  coinName: string;
  coinSymbol: string;
}

const CoinCard = (props: Props) => {
  return (
    <ul>
      <Coin>
        <Link to={{
          pathname: `/coins/${props.coinId}`,
          state: {name: props.coinName}
        }}>
          <CoinThumbnail src={`https://cryptoicon-api.vercel.app/api/icon/${props.coinSymbol.toLowerCase()}`} />
          {props.coinName}
        </Link>
      </Coin>
    </ul>
  )
}

export default CoinCard;

const Coin = styled.li`
  background-color: white;
  color: ${COLORS.mainBackgroundColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
  }
`;

const CoinThumbnail = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;