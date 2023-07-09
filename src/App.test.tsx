import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/追加/i);
    expect(linkElement).toBeInTheDocument();
});
