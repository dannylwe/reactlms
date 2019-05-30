import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login';

describe('Login', () => {
  it('should render without failing', () => {
    const wrapper = renderer.create(<MemoryRouter><Login /></MemoryRouter>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
