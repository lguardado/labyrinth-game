import React from 'react';
import { render } from '@testing-library/react'
import Block from '../block/block';

test('Has the Block class when there is no props passed', () => {
    const { container } = render(<Block />);
    expect(container.firstChild.className).toContain('Block');
})
test('Has the Disabled class when receives isDisabled prop as true', () => {
    const { container } = render(<Block isDisabled={true} />);
    expect(container.firstChild.className).toContain('Disabled');
})
test('Has the Finish class when receives isFinish prop as true', () => {
    const { container } = render(<Block isFinish={true} />);
    expect(container.firstChild.className).toContain('Finish');
})
test('Has the Start class when receives isStart prop as true', () => {
    const { container } = render(<Block isStart={true} />);
    expect(container.firstChild.className).toContain('Start');
})

test('Has the Player class when receives isPlayerHere prop as true', () => {
    const { getByTestId } = render(<Block isPlayerHere={true} />);
    expect(getByTestId('player')).toBeInTheDocument();
})
