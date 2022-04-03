import {useCallback, useMemo, useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {IMAGES} from '../constants/images';
import {CoinCardProps} from '../types';
import {useRecoilState} from 'recoil';
import {staredCoinAtom} from '../atoms';
import {toggler} from '../utils/toggler';

const CoinCard = (props: CoinCardProps) => {
  const [isStared, setStar] = useState(false);
  const [staredCoin, setStaredCoin] = useRecoilState(staredCoinAtom);
  
  const StarBookmarkIcon = useMemo(() => {
    if(isStared === true){
      return IMAGES.star
    } else {
      return IMAGES.unstar
    }
  }, [isStared]);

  const onClickStar = useCallback(() => {
    setStar(!isStared);
    setStaredCoin([...staredCoin, {
      coinId: props.coinId,
      coinName: props.coinName,
      coinSymbol: props.coinSymbol,
      isStared: toggler(isStared)
    }]);
  }, [isStared, staredCoin]);

  return (
    <Container>
      <Link to={`/coins/${props.coinId}`}>
        <Coin>
          <CoinThumbnail src={`https://cryptocurrencyliveprices.com/img/${props.coinId}.png`} />
          <CoinName>
            {props.coinName}
          </CoinName>
        </Coin>
      </Link>
      <BookmarkContainer onClick={onClickStar}>
        <StarBookmark src={StarBookmarkIcon} />
      </BookmarkContainer>
    </Container>
  )
}

export default CoinCard;

const Container = styled.div`
  display: flex;  
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border: 1px solid;
  border-radius: 15px;
`

const Coin = styled.div`
  display: flex;
  align-items: center;
`;

const CoinThumbnail = styled.img`
  width: 40px;
  height: 40px;
`;

const CoinName = styled.h1`
  margin-left: 15px;
  font-size: 19px;
`;

const BookmarkContainer = styled.div`
  display: flex;
`

const StarBookmark = styled.img`
  width: 40px;
  height: 40px;
`;