import {render} from '@testing-library/react';
import FormButton from '../FormButton';

describe('[FormButton]', () => {
  const FormButtonComponent = () => {
    return (
      <FormButton
        value={''}
        onClickButton={() => {}}
      />
    );
  }
  
  test('Rendering FormButton component', () => {
    const rendered = render(FormButtonComponent());
    expect(rendered).toBeTruthy();
  });
});