import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBox from './SearchBox';

describe('SearchBox', () => {
  it('should call onSearch when clicking on the button', () => {
    const spy = jest.fn();
    const { getByPlaceholderText, getByLabelText } = render(
      <SearchBox placeholder="test this" label="search" onSearch={spy} />
    );
    const input = getByPlaceholderText('test this');
    const button = getByLabelText('search');

    fireEvent.change(input, { target: { value: 'star wars' } });
    fireEvent.click(button);

    expect(spy).toHaveBeenCalledWith('star wars');
  });

  it('should call onSearch when hitting enter key', () => {
    const spy = jest.fn();
    const { getByPlaceholderText, getByLabelText } = render(
      <SearchBox placeholder="test this" label="search" onSearch={spy} />
    );
    const input = getByPlaceholderText('test this');

    fireEvent.change(input, { target: { value: 'star wars' } });
    fireEvent.keyUp(input, { keyCode: 13 });

    expect(spy).toHaveBeenCalledWith('star wars');
  });
  it('should not call onSearch when value is empty', () => {
    const spy = jest.fn();
    const { getByPlaceholderText, getByLabelText } = render(
      <SearchBox placeholder="test this" label="search" onSearch={spy} />
    );
    const input = getByPlaceholderText('test this');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.keyUp(input, { keyCode: 13 });

    expect(spy).not.toHaveBeenCalled();
  });
});
