import React from 'react';
import { getByText, render } from '@testing-library/react'
import Marker from '../marker/marker';

let looseText = 'Foo'
let movesLeft = 0;

test('Renders render moves with the right elements', () => {
   const { getByText } = render(<Marker movesLeft={movesLeft} result={looseText} />)
        expect(getByText(looseText)).toBeInTheDocument();
        expect(getByText(movesLeft.toString())).toBeInTheDocument();
});