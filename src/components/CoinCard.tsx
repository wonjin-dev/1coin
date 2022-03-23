import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {CoinCardProps} from '../types';

const CoinCard = (props: CoinCardProps) => {
  return (
    <ul>
      <Link to={{
        pathname: `/coins/${props.coinId}`,
        state: {name: props.coinName}
      }}>
        <Coin>
          <CoinThumbnail src={`https://cryptoicon-api.vercel.app/api/icon/${props.coinSymbol.toLowerCase()}`} />
          <CoinInfo>
            {props.coinName}
          </CoinInfo>
        </Coin>
      </Link>
    </ul>
  )
}

export default CoinCard;

const Coin = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 30px;
  background-color: inherit;
  border: 1px solid;
  border-color: '#f5f6fa';
  border-radius: 15px;
  color: '#f5f6fa';
`;

const CoinThumbnail = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

const CoinInfo = styled.h1`
  font-size: 19px;
`