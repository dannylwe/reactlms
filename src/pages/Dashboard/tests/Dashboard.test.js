import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../Dashboard';

describe('Dashboard', () => {
  it('should render without failing', () => {
    const wrapper = renderer.create(<MemoryRouter><Dashboard /></MemoryRouter>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
