import {render} from '@testing-library/react';
import LoginPage from '../LoginPage';

describe('[LoginPage]', () => {
  const LoginPageComponent = () => {
    return <LoginPage />;
  }

  test('Rendering Page', () => {
    const rendered = render(LoginPageComponent());
    expect(rendered).toBeTruthy();
  });
});