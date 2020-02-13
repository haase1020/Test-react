import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

//arrange, act, assert

test('renders animal form header ', () => {

//arrange
  const { getByText } = render(<App />);

//i means case insensitive
//act
  const header = getByText(/add new animal/i);

  //assert
  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).not.toBeFalsy();
});


//Jest global functions
//~test
//~expect
//~toBeInTheDocument

test('concise test - renders animal form header', () => {
const { getByText } = render(<App />);
 getByText(/add new animal/i);
})