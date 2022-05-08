import {render} from '@testing-library/react';
import Input from '../Input';

describe('[Input]', () => {
  const InputComponent = () => {
    return (
      <Input
        inputName={''}
        value={''}
        onChange={() => {}}
      />
    );
  }
  
  test('Rendering Input component', () => {
    const rendered = render(InputComponent());
    expect(rendered).toBeTruthy();
  });
});