import {useState, useEffect, useCallback, useMemo} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useRecoilState, useRecoilValue} from 'recoil';
import {darkModeAtom, staredCoinAtom} from '../atoms';
import {STRINGS} from '../constants/ko';
import {IMAGES} from '../constants/images';
import {CoinListSchema} from '../types';
import {getCoinList} from '../api/coin';
import {checkOverlap} from '../utils/checkOverlap';
import CoinCard from '../components/CoinCard';
import Loader from '../components/Loader';
let timer: NodeJS.Timeout | null;

const Coins = () => {
  const [coinList, setCoinList] = useState<CoinListSchema[]>([]);
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);
  const staredCoins = useRecoilValue(staredCoinAtom);
  const [filter, setFilter] = useState<boolean | undefined>(undefined);
  const [target, setTarget] = useState<Element | null>(null);
  const [fetchIndex, setIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const themeMode = useMemo(() => {
    if(darkMode === true) {
	  return IMAGES.lightMode;
    } else {
	  return IMAGES.darkMode;
    }
  }, [darkMode]);

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
		    <ThemeButton onClick={() => setDarkMode(!darkMode)}>
			  <ThemeToggleImage src={themeMode} />
		    </ThemeButton>
            <Link to={'/coins/stared'}>
		      <FilterBtn onClick={() => setFilter(!filter)}>{STRINGS.seeTheStars}</FilterBtn>
            </Link>
		  </Header>
          <Cards>
	  	    {!filter && coinList.map((coin: CoinListSchema, i: number) => {
	  	      return (
	  	        <CoinCard
	  	          key={i}
	  	          coinId={coin.id}
	  	          coinName={coin.name}
	  	          coinSymbol={coin.symbol}
				  isStared={checkOverlap({
			    	origin: staredCoins,
			    	new: coin.id,
			    	key: 'coinId'
				  })}
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
	  <InfiniteObserver ref={setTarget}>
        {isLoaded && 
		  <Loader
		    type="spin"
		    img={IMAGES.coin}
		  />}
	  </InfiniteObserver>
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

const ThemeButton = styled.button`
`;

const ThemeToggleImage = styled.img`
  width: 40px;
  height: 40px;
`;

const FilterBtn = styled.button`
`;

const InfiniteObserver = styled.div`
`;