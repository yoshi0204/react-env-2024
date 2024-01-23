import { render, screen } from '@testing-library/react';
import Textinput from './TextInput';
import { userEvent } from '@testing-library/user-event';

test('TextInput Conponent Test', async () => {
  const user = userEvent.setup();
  render(<Textinput />);

  const textElement = screen.getByText('Entered Text:');
  expect(textElement).toBeInTheDocument();

  const inputElement = screen.getByLabelText('Text Input');
  await user.type(inputElement, 'Hello World');
  expect(screen.getByText('Entered Text: Hello World')).toBeInTheDocument();
});
