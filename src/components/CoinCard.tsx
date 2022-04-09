import {useState, useCallback, useMemo} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import {IMAGES} from '../constants/images';
import {CoinCardProps} from '../types';
import {staredCoinAtom} from '../atoms';
import {checkOverlap} from '../utils/checkOverlap';

const CoinCard = (props: CoinCardProps) => {
  const [isStared, setStar] = useState(false || props.isStared);
  const [staredCoin, setStaredCoin] = useRecoilState(staredCoinAtom);
  
  const StarBookmarkIcon = useMemo(() => {
    if(isStared === true){
      return IMAGES.star;
    } else {
      return IMAGES.unstar;
    }
  }, [isStared, staredCoin]);

  const onClickStar = useCallback(() => {
    const overLap = checkOverlap({
      origin: staredCoin,
      new: props.coinName,
      key:'coinName'
    });

    if(!isStared){
      setStar(true);
      if(!overLap){
        setStaredCoin([...staredCoin, {
          coinId: props.coinId,
          coinName: props.coinName,
          coinSymbol: props.coinSymbol,
          isStared: true
        }]);
      }
    } else {
      setStar(false);
      setStaredCoin(staredCoin.filter(coin => coin.coinName !== props.coinName));
    }
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
  );
};

export default CoinCard;

const Container = styled.div`
  display: flex;  
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  border: 1px solid;
  border-radius: 15px;
`;

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
`;

const StarBookmark = styled.img`
  width: 40px;
  height: 40px;
`;