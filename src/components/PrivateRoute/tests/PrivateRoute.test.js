import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import PrivateRoute from '../PrivateRoute';

describe('private componet', () => {
  it('should render successfully', () => {
    const props = {
      isLoggedIn: true,
    };
    const wrapper = renderer.create(
      <MemoryRouter>
        <PrivateRoute isLoggedIn={props.isLoggedIn} />
      </MemoryRouter>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it('should not render successfully', () => {
    const props = {
      isLoggedIn: false,
    };
    const wrapper = shallow(
      <MemoryRouter>
        <PrivateRoute isLoggedIn={props.isLoggedIn} />
      </MemoryRouter>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
