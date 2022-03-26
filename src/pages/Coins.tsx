import {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import {useSetRecoilState} from 'recoil';
import {darkModeAtom} from '../atoms';
import {STRINGS} from '../constants/ko';
import {IMAGES} from '../constants/images';
import {CoinListSchema} from '../api/schema/coinSchema';
import {getCoinList} from '../api/coin';
import CoinCard from '../components/CoinCard';
import Loader from '../components/Loader';
let timer: NodeJS.Timeout | null;

const Coins = () => {
  const [target, setTarget] = useState<Element | null>(null);
  const [fetchIndex, setIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [coinList, setCoinList] = useState<CoinListSchema[]>([]);
  const darkMode = useSetRecoilState(darkModeAtom)
  const setDarkMode = () => darkMode((prev) => !prev);

  const getMoreCoins = useCallback(async() => {
  	setIsLoaded(true);
  	if (!timer) {
  	  timer = setTimeout(async() => {
  	  	timer = null;
  	  	const newList = await getCoinList(fetchIndex);
  	  	setCoinList(coinList => [...coinList, ...newList]);
  	  	setIndex(fetchIndex => fetchIndex + 10);
  	  	setIsLoaded(false);
  	  }, 200);
  	}
  }, [fetchIndex]);

  useEffect(() => {
    getMoreCoins();
  }, []);

  const onIntersect = async([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
  	if (entry.isIntersecting && !isLoaded) {
  	  observer.unobserve(entry.target);
  	  await getMoreCoins();
  	  observer.observe(entry.target);
  	}
  };

  useEffect(() => {
  	let observer: IntersectionObserver;
  	if (target) {
  	  observer = new IntersectionObserver(onIntersect);
  	  observer.observe(target);
  	}
  	return () => observer && observer.disconnect();
  }, [target, onIntersect]);

  return (
    <>
	  {coinList.length > 0 ? (
		<Container>
		  <Header>
		    <Intro>{STRINGS.pjTitle}</Intro>
		    <button onClick={setDarkMode}>DarkMode</button>
		  </Header>
          <Cards>
	  	    {coinList.map((coin: CoinListSchema, i: number) => {
	  	      return (
	  	        <CoinCard
	  	          key={i}
	  	          coinId={coin.id}
	  	          coinName={coin.name}
	  	          coinSymbol={coin.symbol}
	  	        />
              );
	  	    })}
          </Cards>
	  	</Container>
      ) : (
		<Loader
		  type={'page'}
          text={STRINGS.loadCoinList}
		/>
      )}
	  <div ref={setTarget}>
        {isLoaded && 
		  <Loader
		    type="spin"
		    img={IMAGES.coin}
		  />}
	  </div>
    </>
  );
};

export default Coins;

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
	max-width: 100%;
  }
`;

const Cards = styled.div`
  @media screen and (min-width: 1024px) {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	margin: 0 10% 0 10%
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;
`;

const Intro = styled.h1`
  color: ${(props) => props.theme.textColor};
`;