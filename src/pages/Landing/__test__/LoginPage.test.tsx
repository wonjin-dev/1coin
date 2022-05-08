import {render} from '@testing-library/react';
import LoginPage from '../LoginPage';

const getLoginPageComponent = () => {
  return <LoginPage />;
}

describe('[Login 페이지 렌더링]', () => {
  let component = getLoginPageComponent();

  test('render', () => {
    const rendered = render(component);
    expect(rendered).toBeTruthy();
  });
});