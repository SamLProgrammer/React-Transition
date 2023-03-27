import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHooks } from "../../src/examples/MultipleCustomHooks"
import { useFetch } from "../../src/hooks/useFetch"
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Testing MultipleCustomHooks.jsx', () => {

  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  test('should render component', () => {

    useFetch.mockReturnValue({
      data: [{ author: 'Samuel', quote: 'ola ke ase' }],
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />)
    expect(screen.getByText('Loading Quote...'));
    expect(screen.getByText('Breaking Bad Quotes'));
    const nextButton = screen.getByRole('button');
    expect(nextButton.disabled).toBeTruthy();
  })


  test('should show a quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Samuel', quote: 'ola ke ase' }],
      isLoading: false,
      hasError: null,
    });
    render(<MultipleCustomHooks />);
    screen.debug();
    expect(screen.getByText('ola ke ase')).toBeTruthy();
    const nextButton = screen.getByRole('button');
    expect(nextButton.disabled).toBeFalsy();
  })

  test('increment should have been called', () => {

    useFetch.mockReturnValue({
      data: [{ author: 'Samuel', quote: 'ola ke ase' }],
      isLoading: false,
      hasError: null,
    });


    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button');
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  })
})