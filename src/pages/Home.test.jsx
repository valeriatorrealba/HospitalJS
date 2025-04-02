import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
    test('should render the title "Inicio"', () => {
        render(<Home />);
        const headingElement = screen.getByRole('heading', { name: /inicio/i });
        expect(headingElement).toBeInTheDocument();
    });
});
