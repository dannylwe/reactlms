import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Error from '../Error';

describe('Error page', () => {
  it('should render without failing', () => {
    const wrapper = renderer.create(<MemoryRouter><Error /></MemoryRouter>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
