import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import React from 'react';
import Navbar from './Navbar';

describe('test render', () => {
  test('Header should match snapshoot', () => {
    const tree = renderer.create(
      <React.StrictMode>
        <Navbar name="Home" returnpage={false} />
      </React.StrictMode>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
