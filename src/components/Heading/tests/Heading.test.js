import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Heading from '../Heading';

describe('Heading', () => {
  it('should render without failing', () => {
    const wrapper = renderer.create(<MemoryRouter><Heading /></MemoryRouter>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
