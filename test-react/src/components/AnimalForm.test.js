import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AnimalForm from './AnimalForm';

test('species, age, notes inputs are rendered', () => {
  const { getByLabelText } = render(<AnimalForm />);
  getByLabelText(/species/i);
  getByLabelText(/age/i);
  getByLabelText(/notes/i);
});

test('form submit adds new animal to the list', () => {
  const { getByLabelText, getByText, getByTestId } = render(<AnimalForm />);
  // querying for all the input nodes
  const speciesInput = getByLabelText(/species/i);
  const ageInput = getByLabelText(/age/i);
  const notesInput = getByLabelText(/notes/i);

  // use the change event to add text to each input
  fireEvent.change(speciesInput, { target: { value: 'Test Species' } });
  fireEvent.change(ageInput, { target: { value: 'Test Age' } });
  fireEvent.change(notesInput, { target: { value: 'Test note' } });

  expect(speciesInput.value).toBe('Test Species');
  expect(ageInput.value).toBe('Test Age');
  expect(notesInput.value).toBe('Test note');

  // click on the button!
  fireEvent.click(getByText(/submit!/i));

  // assert that the species is added to the list
  const animalText = getByTestId(/test species/i);
  expect(animalText).toBeInTheDocument();
});

// describe('', () => {
//   it('', () => {

//   })
// })
