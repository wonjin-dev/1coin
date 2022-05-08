import {render} from '@testing-library/react';
import {RecoilRoot} from 'recoil';
import {CoinCardProps} from '../../../types/props';
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
    const rendered = render(<RecoilRoot>component</RecoilRoot>);
    expect(rendered).toBeTruthy();
  });
});