import {render} from '@testing-library/react';
import {CoinCardProps} from '../../../types';
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

  // TODO:: Recoil Root 안에 포함되어야 한다고 오류 발생
  test('render', () => {
    const rendered = render(component);
    expect(rendered).toBeTruthy();
  });
});