import * as TEST from '@testing-library/react';
import {CoinCardProps} from '../types';
import CoinCard from '../components/CoinCard';

const getCoinCardComponent = (props: CoinCardProps) => {
  return <CoinCard {...props} />;
}

describe('[COINS 페이지 렌더링]', () => {
  let props = {
    coinId: '',
    coinName: '',
    coinSymbol: '',
    isStared: false
  };
  let component = getCoinCardComponent(props);

  test('render', () => {
    const rendered = TEST.render(component);
    expect(rendered).toBeTruthy();
  });
});