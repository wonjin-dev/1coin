import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {CoinCardProps} from '../types';

const CoinCard = (props: CoinCardProps) => {
  return (
    <ul>
      <Link to={`/coins/${props.coinId}`}>
        <Coin>
          <CoinThumbnail src={`https://cryptocurrencyliveprices.com/img/${props.coinId}.png`} />
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
  border: 1px solid;
  border-radius: 15px;
`;

const CoinThumbnail = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

const CoinInfo = styled.h1`
  font-size: 19px;
`;