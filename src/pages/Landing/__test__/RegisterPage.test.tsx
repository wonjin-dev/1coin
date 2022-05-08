import {render} from '@testing-library/react';
import RegisterPage from '../RegisterPage';

const getLoginPageComponent = () => {
  return <RegisterPage />;
}

describe('[Register 페이지 렌더링]', () => {
  let component = getLoginPageComponent();

  test('render', () => {
    const rendered = render(component);
    expect(rendered).toBeTruthy();
  });
});